package com.stackroute.usermanagement.exceptions;

public class NotUpdatedException extends Exception{
    private String message;

    public NotUpdatedException() {
    }
    public NotUpdatedException(String message) {
        super(message);
        this.message = message;

    }
}
