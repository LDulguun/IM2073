package com.webproject.maven.backend.item;

import java.util.ArrayList;
import java.util.List;
import java.io.*;
import java.sql.*;
import java.security.SecureRandom;
import java.util.*;

import org.springframework.stereotype.Service;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class UserService {
  @Autowired
  JdbcTemplate jdbcTemplate;
  SecureRandom secureRandom = new SecureRandom(); //threadsafe
  Base64.Encoder base64Encoder = Base64.getUrlEncoder(); //threadsafe

  public static long SESSION_DURATION = 300000;

  private User user = null;

  public String login(String userName, String pword) {
    String sqlStr = "SELECT * FROM users WHERE user_name = '";
    sqlStr = sqlStr + userName + "' and password = '" + pword + "';" ;
    List<User> users = jdbcTemplate.query(sqlStr,
                        (rs, rowNum) ->
                          new User(
                                rs.getString("user_id"),
                                rs.getString("user_name").toLowerCase(),
                                rs.getString("email").toLowerCase(),
                                rs.getString("mob_num")
                          )
                        );
    // check if user exists (i.e. list result is not empty)
      // if exists, delete previous token associated with user and generate new token
    if (users.size() > 0) {
      sqlStr = "DELETE FROM tokens WHERE user_id = '";
      sqlStr = sqlStr + users.get(0).getUserId() + "';";
      jdbcTemplate.update(sqlStr);

      Token token = generateToken();
      sqlStr = "INSERT into tokens ";
      sqlStr = sqlStr + "(value, stamp, user_id) VALUES ('"
                      + token.getValue() + "', " + token.getStamp() + ", '" + users.get(0).getUserId() + "');";
      jdbcTemplate.update(sqlStr);

      System.out.println("found token: " + token);
      return token.getValue();
    }
    System.out.println("not found");
    return "not found";
  }

  public String logout(String tokenValue) {
    String sqlStr = "DELETE FROM tokens WHERE value = '";
    sqlStr = sqlStr + tokenValue + "';";
    jdbcTemplate.update(sqlStr);
    return null;
  }

  public boolean signUp(User input, String pword){//String userName, String pword, String email, String mobNum) {
      //Generate random userId
        //array of bytes(8 bit signed 2's complement integer
        //length = 24
        byte[] randomBytes = new byte[24];
        //generate random bytes
        secureRandom.nextBytes(randomBytes);
        //convert bytes to string
        String userId = base64Encoder.encodeToString(randomBytes);
        
        String sqlStr = "SELECT * FROM users WHERE user_name = '";
        sqlStr = sqlStr + input.getUserName().toLowerCase() + "';" ;
        List<User> users = jdbcTemplate.query(sqlStr, 
                            (rs, rowNum) ->
                              new User(
                                    rs.getString("user_id"),
                                    rs.getString("user_name"),
                                    rs.getString("email"),
                                    rs.getString("mob_num")
                              )
                            );
        //if user already exists in database
        if (users.size() > 0) {
          return false;
        }
        //if not insert into table
        sqlStr = "INSERT into users ";
        sqlStr = sqlStr + "(user_id, user_name, email, mob_num, password) VALUES ('"
                        + userId + "', '" + input.getUserName().toLowerCase() + "', '" + input.getEmail().toLowerCase() + "', '" + input.getMobNum() + "', '" + pword + "');";
        
        jdbcTemplate.update(sqlStr);
        return true;
  }

  public User getUserDetails(String tokenValue) {
    return createUser(getUserIdFromToken(tokenValue));
  }

  public boolean checkToken(String tokenValue) {
    Timestamp timestamp = new Timestamp(System.currentTimeMillis());
    long currentTime = timestamp.getTime();
    String sqlStr = "SELECT * FROM tokens WHERE value = '";
    sqlStr = sqlStr + tokenValue + "';" ;
    List<Token> tokens = jdbcTemplate.query(sqlStr, 
                      (rs, rowNum) ->
                        new Token(
                                rs.getString("value"),
                                rs.getLong("stamp")
                        )
                      );
    System.out.println(tokens.get(0).getStamp() + "   " + (currentTime - SESSION_DURATION));
    //timeout check(if user takes too long) or if token does not exist
    if (tokens.size() <= 0 || tokens.get(0).getStamp() < (currentTime - SESSION_DURATION)) {
      return false;
    }

    return true;
  }

  //update stamp of old token
  public void updateToken(String tokenValue) {
        Token newToken = generateToken();

        String sqlStr = "UPDATE tokens ";
        sqlStr = sqlStr + " SET stamp = " + newToken.getStamp() + " WHERE value = '" + tokenValue + "';" ;
        jdbcTemplate.update(sqlStr);
  }

  //select all items from cart table according to userId obtained from token
    //for each item, create the item object with id and qty as constructor parameters
  public List<Item> showCart ( String tokenValue) {
    String userId = getUserIdFromToken(tokenValue);
    System.out.println(userId);
    String sqlStr = "SELECT * FROM cart WHERE user_id = '";
    sqlStr = sqlStr + userId + "' ORDER BY item_id ASC;" ;
    return jdbcTemplate.query(sqlStr, 
                      (rs, rowNum) ->
                        createItem(
                                rs.getString("item_id"),
                                rs.getInt("qty")
                        )
                      );
  }

  public String addToCart(String itemId, int qty, String tokenValue) {
    //each row in tokens table contains the sessionId and userId
    String userId = getUserIdFromToken(tokenValue);

    //if current stock is more than the qty ordered
    if ((createItem(itemId, qty)).getStock() >= qty) {
      String sqlStr = "SELECT * FROM cart WHERE user_id = '";
      sqlStr = sqlStr + userId + "' and item_id = '" + itemId + "';" ;
      List<Integer> cQty; 
      cQty = jdbcTemplate.query(sqlStr, 
                      (rs, rowNum) ->
                                rs.getInt("qty")
                      );
      //if item qty in cart = 0 (i.e. cart has no item in it)
        //then insert the item
      if (cQty.size() == 0) {
        sqlStr = "INSERT into cart ";
        sqlStr = sqlStr + "(user_id, item_id, qty) VALUES ('" + userId + "', '" + itemId + "', " + qty + ");";
        
        jdbcTemplate.update(sqlStr);
        //if not update the qty
      } else if (cQty.get(0) != qty) {
        sqlStr = "UPDATE cart ";
        sqlStr = sqlStr + " SET qty = " + qty + " WHERE user_id = '" + userId + "' and item_id = '" + itemId + "';" ;
        jdbcTemplate.update(sqlStr);
      }
    }
    return itemId;
  }

  public int removeFromCart(String itemId, String tokenValue) {
    String userId = getUserIdFromToken(tokenValue);

    String sqlStr = "SELECT * FROM cart WHERE user_id = '";
    sqlStr = sqlStr + userId + "' and item_id = " + itemId + ";" ;
    int qty = jdbcTemplate.query(sqlStr, 
                      (rs, rowNum) ->
                                rs.getInt("qty")
                      ).get(0);

    sqlStr = "DELETE FROM cart WHERE user_id = '";
    sqlStr = sqlStr + userId + "' and item_id = '" + itemId + "';";
    jdbcTemplate.update(sqlStr);

    return qty;
  }

    public int removeFromCartQty(String itemId, int qty, String tokenValue) {
        String userId = getUserIdFromToken(tokenValue);

        String sqlStr = "SELECT * FROM cart WHERE user_id = '";
        sqlStr = sqlStr + userId + "' and item_id = " + itemId + ";" ;
        List<Integer> bool = jdbcTemplate.query(sqlStr,
                (rs, rowNum) ->
                        rs.getInt("qty")
        );
        int check =0;
//        if (bool.get(0) <= qty){
//            if(bool.get(0) == qty){
//                check = removeFromCart(itemId, tokenValue);
//            }
//            else{
                sqlStr = "UPDATE cart ";
                sqlStr = sqlStr + " SET qty = qty - " + qty + " WHERE user_id = '" + userId + "' and item_id = '" + itemId + "';" ;
                jdbcTemplate.update(sqlStr);
                check = 1;
//            }
//        }
        return check;
    }

  //similar to showCart, shows items from orders table
  public List<Item> showOrders( String tokenValue) {
    String userId = getUserIdFromToken(tokenValue);
    String sqlStr = "SELECT * FROM orders where user_id = '";
    sqlStr = sqlStr + userId + "' ORDER BY item_id DESC;" ;
    
    return jdbcTemplate.query(sqlStr, 
                      (rs, rowNum) ->
                        createItem(
                                rs.getString("item_id"),
                                rs.getInt("qty"),
                                rs.getString("ordered_date")
                        )
                      );
  }

  public boolean placeOrder(String itemId, int qty, String tokenValue) {
    String userId = getUserIdFromToken(tokenValue);    
    Item item = createItem(itemId, qty);

    int remStock = (item.getStock() - item.getQty());
    String sqlStr = "UPDATE items SET stock = ";
    sqlStr = sqlStr + remStock + " WHERE item_id = '" + item.getItemId() + "';" ;
    jdbcTemplate.update(sqlStr);

    sqlStr = "INSERT into orders  (user_id, item_id, qty, ordered_date) VALUES ('";
    sqlStr = sqlStr + userId + "', '" + item.getItemId() + "', " + item.getQty() + ", NOW());";
    jdbcTemplate.update(sqlStr);  // Send the query to the server
    return true;
  }

  //creates item object with its info according to itemId
  public Item createItem(String itemId, int qty) {
    String sqlStr = "SELECT * FROM items WHERE item_id = '";
    sqlStr = sqlStr + itemId + "';" ;

    return jdbcTemplate.query(sqlStr, 
                      (rs, rowNum) ->
                        new Item(
                                rs.getString("item_id"),
                                rs.getString("item_name"),
                                rs.getDouble("price"),
                                rs.getInt("stock"),
                                qty
                        )
                      ).get(0);

  }

  public Item createItem(String itemId, int qty, String orderedDate) {

    String sqlStr = "SELECT * FROM items WHERE item_id = '";
    sqlStr = sqlStr + itemId + "';" ;

    return jdbcTemplate.query(sqlStr, 
                      (rs, rowNum) ->
                        new Item(
                                rs.getString("item_id"),
                                rs.getString("item_name"),
                                rs.getDouble("price"),
                                rs.getInt("stock"),
                                qty,
                                orderedDate
                        )
                      ).get(0);

  }
  
  public User createUser(String userId) {

    String sqlStr = "SELECT * FROM users WHERE user_id = '";
    sqlStr = sqlStr + userId + "';" ;

    return jdbcTemplate.query(sqlStr, 
                      (rs, rowNum) ->
                        new User(
                                rs.getString("user_id"),
                                rs.getString("user_name"),
                                rs.getString("email"),
                                rs.getString("mob_num")
                        )
                      ).get(0);
  }

  public String getUserIdFromToken(String tokenValue) {
    String sqlStr = "SELECT * FROM tokens WHERE value = '";
    sqlStr = sqlStr + tokenValue + "';" ;
    
    return jdbcTemplate.query(sqlStr, 
                      (rs, rowNum) ->
                        createUser(
                                rs.getString("user_id")
                        )
                      ).get(0).getUserId();
  }

  public Token generateToken() {
      String tokenValue;
      Timestamp timestamp = new Timestamp(System.currentTimeMillis());
      long stamp = timestamp.getTime();
      byte[] randomBytes = new byte[24];
      secureRandom.nextBytes(randomBytes);
      tokenValue = base64Encoder.encodeToString(randomBytes);
      return (new Token(tokenValue, timestamp.getTime()));
  }
  
}