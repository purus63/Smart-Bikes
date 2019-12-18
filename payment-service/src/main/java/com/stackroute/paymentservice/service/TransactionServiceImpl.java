package com.stackroute.paymentservice.service;

import com.stackroute.paymentservice.model.Transaction;
import com.stackroute.paymentservice.model.Wallet;
import com.stackroute.paymentservice.repository.TransactionRepository;
import com.stackroute.paymentservice.repository.WalletRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
public class TransactionServiceImpl implements TransactionService{

    @Autowired
    TransactionRepository transactionRepository;

    @Autowired
    WalletService walletService;

    @Autowired
    WalletRepository walletRepository;

    @Override
    public Transaction getTransactionByID(String transactionID) {
        Transaction transaction = transactionRepository.findByTransactionID(transactionID);
        return transaction;
    }

    @Override
    public Transaction addTransaction(Transaction transaction) {
        transactionRepository.save(transaction);
        return transaction;
    }

    @Override
    public List<Transaction> getAllTransactionsByUserID(String userID, Integer pageLimit, Integer pageNum) {

        if (pageLimit == null) {
            pageLimit = 100;
        }
        if (pageNum == null) {
            pageNum = 0;
        }

        return transactionRepository.findByUserID(userID, PageRequest.of(pageNum, pageLimit)).getContent();
    }
//
//    @Override
    public Transaction makeTransaction(double amount, String userID, String bookingID, Transaction.type transactionType) {



        // add new transaction
        Transaction transaction = new Transaction();
        transaction.setAmount(amount);
        transaction.setUserID(userID);
        transaction.setBookingID(bookingID);
        transaction.setTimeStamp(LocalDateTime.now());
        transaction.setType(transactionType);
        transactionRepository.save(transaction);

        // update the wallet
        Wallet wallet = walletService.getWalletByUserID(userID);
        double updatedBalance = wallet.getBalance();
        if(transactionType == Transaction.type.CREDIT){
            updatedBalance += amount;
        }else{
            updatedBalance -= amount;
        }
        wallet.setBalance(updatedBalance);
        walletRepository.save(wallet);

        return transaction;
    }

    @Override
    public Transaction getTransactionByBookingID(String bookingID) {
        return transactionRepository.findByBookingID(bookingID);
    }
}
