package com.webproject.maven.backend.item;

import java.util.Objects;
import java.util.ArrayList;
import java.util.List;
import java.io.*;
import java.sql.*;

public class Item {
  static String mysqlConnection = "jdbc:mysql://localhost:3306/ebookshop?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC";

  private String itemId;
  private String itemName;
  private double price;
  private int stock;
  private int qty;  //to be user for cart quantity, order quantity etc.
  private String orderedDate;

  public Item() {

  }

  public Item(String itemId, String itemName, double price, int stock, int qty) {
    super();
    this.itemId = itemId;
    this.itemName = itemName;
    this.price = price;
    this.stock = stock;
    this.qty = qty;
    this.orderedDate = "none";
  }

  public Item(String itemId, String itemName, double price, int stock, int qty, String orderedDate) {
    super();
    this.itemId = itemId;
    this.itemName = itemName;
    this.price = price;
    this.stock = stock;
    this.qty = qty;
    this.orderedDate = orderedDate;
  }

  //if override equals, we must also also override hashcode
  @Override
  public int hashCode() {
    return Objects.hash(itemId, itemName, price, qty, stock, orderedDate);
  }

  //this is to override the equals method to ensure object equality
  @Override
  public boolean equals(Object obj) {
    if (this == obj)
      return true;
    if (obj == null || getClass() != obj.getClass())
      return false;
    Item other = (Item) obj;
    return Objects.equals(itemId, other.itemId) &&
    Objects.equals(itemName, other.itemName) &&
    Objects.equals(price, other.price) &&
    Objects.equals(stock, other.stock) &&
    Objects.equals(qty, other.qty) &&
    Objects.equals(orderedDate, other.orderedDate);
  }

  public String getItemId() {
    return itemId;
  }

  public void setItemId(String itemId) {
    this.itemId = itemId;
  }

  public String getItemName() {
    return itemName;
  }

  public void setItemName(String itemName) {
    this.itemName = itemName;
  }

  public double getPrice() {
    return price;
  }

  public void setPrice(Double qty) {
    this.price = price;
  }  

  public int getQty() {
    return qty;
  }

  public void setQty(int qty) {
    this.qty = qty;
  }

  public int getStock() {
    return stock;
  }

  public void setStock(int stock) {
    this.stock = stock;
  }

  public String getOrderedDate() {
    return orderedDate;
  }

  public void setOrderedDate(String orderedDate) {
    this.orderedDate = orderedDate;
  }

}

/*
  public Item(String itemId) {
    super();
    try (
         // Step 1: Allocate a database 'Connection' object
         Connection conn = DriverManager.getConnection(
               mysqlConnection,
               "myuser", "xxxx");   // For MySQL
               // The format is: "jdbc:mysql://hostname:port/databaseName", "username", "password"

         // Step 2: Allocate a 'Statement' object in the Connection
         Statement stmt = conn.createStatement();
      ) {
         String sqlStr = "SELECT * FROM items WHERE id = '";
         sqlStr = sqlStr + itemId + "';" ;

         ResultSet rset = stmt.executeQuery(sqlStr);  // Send the query to the server

         if(rset.next()) {
          setItemId(rset.getString("item_id")); 
          setItemName(rset.getString("item_name")); 
          setPrice(rset.getDouble("price")); 
          setStock(rset.getInt("stock"));
          setQty(1);
         }

      } catch(Exception ex) {
         ex.printStackTrace();
      }
  }

  public Item(String itemId, int qty) {
    super();
    try (
         // Step 1: Allocate a database 'Connection' object
         Connection conn = DriverManager.getConnection(
               mysqlConnection,
               "myuser", "xxxx");   // For MySQL
               // The format is: "jdbc:mysql://hostname:port/databaseName", "username", "password"

         // Step 2: Allocate a 'Statement' object in the Connection
         Statement stmt = conn.createStatement();
      ) {
         String sqlStr = "SELECT * FROM items WHERE id = '";
         sqlStr = sqlStr + itemId + "';" ;

         ResultSet rset = stmt.executeQuery(sqlStr);  // Send the query to the server

         if(rset.next()) {
          setItemId(rset.getString("item_id")); 
          setItemName(rset.getString("item_name")); 
          setPrice(rset.getDouble("price")); 
          setStock(rset.getInt("stock"));
          setQty(1);
        }

      } catch(Exception ex) {
         ex.printStackTrace();
      }
  }
*/