package com.stackroute.paymentservice.model;

public class User {
    private  String username;
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public User() {
    }

    public User(String username) {
        this.username = username;
    }
}
