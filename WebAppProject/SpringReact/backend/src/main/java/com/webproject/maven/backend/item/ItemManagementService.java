package com.webproject.maven.backend.item;

import java.util.ArrayList;
import java.util.List;
import java.io.*;
import java.sql.*;

import org.springframework.stereotype.Service;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class ItemManagementService {
  @Autowired
  JdbcTemplate jdbcTemplate;
  UserRepository repository;

  public List<Item> search(String input) {

    String sqlStr = "SELECT * FROM items WHERE item_name LIKE '%";
    sqlStr = sqlStr + input + "%' ORDER BY item_name ASC;" ;
    return jdbcTemplate.query(sqlStr, 
                        (rs, rowNum) ->
                          new Item(
                                rs.getString("item_id"),
                                rs.getString("item_name"),
                                rs.getDouble("price"),
                                rs.getInt("stock"),
                                1
                          )
                        );
    }

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
  
}