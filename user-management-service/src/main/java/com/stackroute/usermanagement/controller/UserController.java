package com.stackroute.usermanagement.controller;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.usermanagement.exceptions.NotUpdatedException;
import com.stackroute.usermanagement.exceptions.UserAlreadyExistsException;
import com.stackroute.usermanagement.exceptions.UserNotFoundException;
import com.stackroute.usermanagement.listner.KafkaConsumer;
import com.stackroute.usermanagement.model.User;
import com.stackroute.usermanagement.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.lang.String;
import java.math.BigInteger;
import java.util.Base64;
import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1")
public class UserController {

    @Autowired
    private UserService userService;


    private BigInteger num = BigInteger.ONE ;

    public UserController(UserService userService) {
        this.userService = userService;
 	 
    }
    @PostMapping(value = "/userProfile")
    public ResponseEntity saveUserProfile ( @RequestParam("file") MultipartFile file, @RequestParam("files") MultipartFile files,@RequestParam ("user") String user ,@RequestHeader("username") String username) throws IOException, UserAlreadyExistsException {
      System.out.println(user);
       System.out.println(file);
        System.out.println(username);
//        User user2 = new User();
//                String uname = kafkaService.consumeJson(user2);
//        System.out.println(uname);
///      user1.setExtension(files.get

User user1 = new ObjectMapper().readValue(user, User.class);
//    user1.setFile(file);
        byte[] logo = file.getBytes();
        byte[] logos = files.getBytes();
//   User user1 = new User();
        String s = Base64.getEncoder().encodeToString(logo);
        String s1 = Base64.getEncoder().encodeToString(logos);
        user1.setusername(username);
        System.out.println(username);
        System.out.println(user1.getusername());
//        user1.setFirstname(firstname);
//       user1.setLastname(lastname);
//       user1.setGender(gender);
//       user1.setAadharNo(aadharNo);
//        user1.setEmail(email);
//        user1.setDob(dob);
        user1.setImage(s);
        user1.setImage1(s1);
        user1.setFileDl(file.getOriginalFilename());
        user1.setFileDlb(files.getOriginalFilename());
        user1.setSubmittedOn(new Date());
        user1.setIsBlocked("Blocked");

       num = num.add(BigInteger.ONE);
        user1.setNumber(num);
        User dbuser = userService.saveUser(user1);
        System.out.println(dbuser.getDob());
        System.out.println(dbuser);
        try {
            System.out.println(dbuser);
            return new ResponseEntity<>(dbuser, HttpStatus.CREATED);
        } catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
        }
    }

    @GetMapping("/User")
    public ResponseEntity getUser(@RequestHeader("username") String username) throws UserNotFoundException  {
        System.out.println(username);
        User user = userService.findOne(username);
        System.out.println(user);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() throws UserNotFoundException {
        List<User> user = userService.getAllUsers();
        return new ResponseEntity<List<User>>(user, HttpStatus.OK);
    }

//    @DeleteMapping("/delete/{username}")
//    public ResponseEntity deleteUser(@PathVariable String username) throws UserNotFoundException {
//        ResponseEntity responseEntity;
//
//        User user = new User();
//        user.setUpdatedAt(new Date());
//        user.setusername(username);
//        responseEntity = new ResponseEntity<>(userService.deleteUser(username), HttpStatus.OK);
//        return responseEntity;
//    }

    @PutMapping("/documents")
    public ResponseEntity update(@RequestBody User user) throws UserNotFoundException , NotUpdatedException {
        user.setUpdatedAt(new Date());
        return new ResponseEntity<>(userService.updateUser(user), HttpStatus.OK);
    }
    @PutMapping("/status")
    public ResponseEntity updateStatus(@RequestParam String numberAsString) throws UserNotFoundException,NotUpdatedException {
//           User user  = userService.updateStatus(String.valueOf(Long.parseLong(usernameAsString)));
        return new ResponseEntity<>(userService.updateStatus(numberAsString), HttpStatus.OK);
    }
    @GetMapping("/check")
    public ResponseEntity check(@RequestHeader("username") String username)  {
        boolean res = userService.checkIfFilled(username);
        System.out.println(res);
        return new ResponseEntity(res, HttpStatus.OK);
    }


}
