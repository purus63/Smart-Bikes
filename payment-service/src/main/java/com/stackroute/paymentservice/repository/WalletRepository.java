package com.stackroute.paymentservice.repository;

import com.stackroute.paymentservice.model.Transaction;
import com.stackroute.paymentservice.model.Wallet;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface WalletRepository extends MongoRepository<Wallet, String> {
    Wallet findByUserID(String userID);
}
