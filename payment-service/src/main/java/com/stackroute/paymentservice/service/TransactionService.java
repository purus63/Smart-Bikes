package com.stackroute.paymentservice.service;

import com.stackroute.paymentservice.model.Transaction;

import java.util.List;
import java.util.UUID;

public interface TransactionService {
    Transaction getTransactionByID(String transactionID);

    Transaction addTransaction(Transaction transaction);

    List<Transaction> getAllTransactionsByUserID(String userID, Integer pageLimit, Integer pageNum);

    Transaction makeTransaction(double amount, String userID, String bookingID, Transaction.type transactionType);

    Transaction getTransactionByBookingID(String bookingID);
}
