package com.webproject.maven.backend.item;

import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class User {

  private String userId;
  private String userName;
  private String email;
  private String mobNum;

  private @JsonIgnore String password;

  public User() {

  }

  public User(String userId, String userName, String email, String mobNum) {
    super();
    this.userId = userId;
    this.userName = userName;
    this.email = email;
    this.mobNum = mobNum;
  }

  public User(String userId, String userName, String email, String mobNum, String password) {
    super();
    this.userId = userId;
    this.userName = userName;
    this.email = email;
    this.mobNum = mobNum;
    this.password = password;
  }

  @Override
  public int hashCode() {
    return Objects.hash(userId, userName, email, mobNum);
  }

  @Override
  public boolean equals(Object obj) {
    if (this == obj)
      return true;
    if (obj == null)
      return false;
    if (getClass() != obj.getClass())
      return false;
    User other = (User) obj;
    return Objects.equals(userId, other.userId) &&
    Objects.equals(userName, other.userName) &&
    Objects.equals(email, other.email) &&
    Objects.equals(mobNum, other.mobNum);
  }

  public String getUserId() {
    return userId;
  }

  public void setUserId(String userId) {
    this.userId = userId;
  }

  public String getUserName() {
    return userName;
  }

  public void setUserName(String userName) {
    this.userName = userName;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getMobNum() {
    return mobNum;
  }

  public void setMobNum(String mobNum) {
    this.mobNum = mobNum;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }
}