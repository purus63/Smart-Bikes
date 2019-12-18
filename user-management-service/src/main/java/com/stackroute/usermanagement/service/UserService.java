package com.stackroute.usermanagement.service;

import com.stackroute.usermanagement.exceptions.NotUpdatedException;
import com.stackroute.usermanagement.exceptions.UserAlreadyExistsException;
import com.stackroute.usermanagement.exceptions.UserNotFoundException;
import com.stackroute.usermanagement.model.User;

import java.lang.String;
import java.util.List;

public interface UserService {
    public User saveUsername(User user)throws UserAlreadyExistsException;
    public User saveUser(User user)throws UserAlreadyExistsException;
    public List<User> getAllUsers() throws UserNotFoundException;
    public User updateUser (User user) throws UserNotFoundException , NotUpdatedException;
    public String deleteUser(String username) throws UserNotFoundException ;
    public User findOne(String username) throws UserNotFoundException;
    public User updateStatus(String  username) throws UserNotFoundException,NotUpdatedException;
    public boolean checkIfFilled(String username);
//    public List<User> findTitleByName(StringtrackName);
}
