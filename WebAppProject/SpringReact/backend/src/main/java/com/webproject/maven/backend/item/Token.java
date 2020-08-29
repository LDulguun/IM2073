package com.webproject.maven.backend.item;

import java.util.Objects;


public class Token {
   	private String value;
    private long stamp;

    public Token(String value, long stamp) {
    	this.value = value;
    	this.stamp = stamp;
    }

    public String getValue() {
    	return value;
    } 

    public void setValue(String value) {
    	this.value = value;
    }

    public long getStamp() {
    	return stamp;
    }

    public void setStamp(long stamp) {
    	this.stamp = stamp;
    }

	@Override
	public int hashCode() {
	  return Objects.hash(value, stamp);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
	      return true;
	    if (obj == null)
	      return false;
	    if (getClass() != obj.getClass())
	      return false;
	    Token other = (Token) obj;
	    return Objects.equals(value, other.value) &&
	    Objects.equals(stamp, other.stamp);
	}

}

