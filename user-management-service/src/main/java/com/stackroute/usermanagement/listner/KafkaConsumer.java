package com.stackroute.usermanagement.listner;

import com.stackroute.usermanagement.exceptions.UserAlreadyExistsException;
import com.stackroute.usermanagement.model.User;
import com.stackroute.usermanagement.repository.UserRepository;
import com.stackroute.usermanagement.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class KafkaConsumer {

    @Autowired
    UserService userService;

//    private final Logger logger = LoggerFactory.getLogger(KafkaConsumer.class);

    @KafkaListener(topics = "Kafka_Example_json12",groupId = "group_json",containerFactory = "userKafkaListenerFactory")
    public String consumeJson(User user) throws UserAlreadyExistsException {

//        logger.info(String.format("@@ COnsumed --> %s",user));
        System.out.println("Consumed JSON Message: " + user);
        this.userService.saveUser(user);
        return user.getusername();
    }
}
