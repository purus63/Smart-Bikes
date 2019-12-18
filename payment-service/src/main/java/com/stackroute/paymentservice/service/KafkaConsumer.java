package com.stackroute.paymentservice.service;

import com.stackroute.paymentservice.model.User;
import com.stackroute.paymentservice.model.Wallet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class KafkaConsumer {

    @Autowired
    WalletService walletService;

    @KafkaListener(topics = "Kafka_Example_json12", groupId = "group_json1",
            containerFactory = "userKafkaListenerFactory")
    public void consumeJson(User user) {
        System.out.println("Consumed JSON Message: " + user);
        walletService.addWallet(user.getUsername());
        System.out.println("6");

    }
}
