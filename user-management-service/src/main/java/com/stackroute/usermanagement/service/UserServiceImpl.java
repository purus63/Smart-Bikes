package com.stackroute.usermanagement.service;

import com.stackroute.usermanagement.exceptions.NotUpdatedException;
import com.stackroute.usermanagement.exceptions.UserAlreadyExistsException;
import com.stackroute.usermanagement.exceptions.UserNotFoundException;
import com.stackroute.usermanagement.model.User;
import com.stackroute.usermanagement.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.String;
import java.util.Date;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User saveUsername(User user) throws UserAlreadyExistsException {
        user = userRepository.save(user);
        return user;
    }

    @Override
    public User saveUser(User user) throws UserAlreadyExistsException {
         if(userRepository.existsById(user.getusername())==false || user.getAadharNo()!=0){
        userRepository.save(user);
        User userX = userRepository.findById(user.getusername()).get();
        System.out.println(userX);

        return userX;
        }
        System.out.println("yeah");
        return  user;
    }

    @Override
    public List<User> getAllUsers() throws UserNotFoundException {
        return userRepository.findAll();

    }

    @Override
    public User updateUser(User user) throws UserNotFoundException, NotUpdatedException {
        User user1 = userRepository.findById(user.getusername()).get();

        return user1;
    }

    @Override
    public User updateStatus(String username) throws UserNotFoundException, NotUpdatedException {
        User user1 = userRepository.findById(username).get();
        user1.setUpdatedAt(new Date());
        user1.setIsBlocked("Unblocked");
        userRepository.save(user1);
        return user1;
    }

    @Override
    public boolean checkIfFilled(String username) {
        boolean res;
        if(userRepository.findById(username).isPresent()) {
            res = userRepository.findById(username).get().getAadharNo()==0;
            System.out.println(res);
        } else {
            res = false;
        }
        return res;
    }

    @Override
    public String deleteUser(String number) {
        userRepository.deleteById(number);
        return "User is deleted";
    }


    @Override
    public User findOne(String username) {
        return userRepository.findById(username).orElse(new User());
    }


//    @Override
//    public List<User> findTitleByName(String trackName) {
//        return null;
//    }
}
