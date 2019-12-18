package com.stackroute.usermanagement.exceptions;

public class UserNotFoundException extends Exception {
        private String message;

        public UserNotFoundException() {
        }
        public UserNotFoundException(String message) {
            super(message);
            this.message = message;

        }

    }


