package com.app.model;


/*This class is responsible for getting values from user and passing it
to the DAO layer for inserting in database. It isn't required during retrieval of data from the database*/

public class UserDTO {
    private String username;
    private String password;


    public UserDTO(String username, String password, String status) {
        this.username = username;
        this.password = password;

    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}