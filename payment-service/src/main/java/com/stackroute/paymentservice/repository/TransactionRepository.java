package com.stackroute.paymentservice.repository;

import com.stackroute.paymentservice.model.Transaction;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionRepository extends MongoRepository<Transaction,String> {

    Transaction findByTransactionID(String transactionID);

    Page<Transaction> findByUserID(String userID, Pageable pageable);

    Transaction findByBookingID(String bookingID);
}
