package com.stackroute.paymentservice.controller;

import com.stackroute.paymentservice.model.BookingInfo;
import com.stackroute.paymentservice.model.Transaction;
import com.stackroute.paymentservice.model.Wallet;
import com.stackroute.paymentservice.service.StripeClient;
import com.stackroute.paymentservice.model.RechargeInfo;
import com.stackroute.paymentservice.service.TransactionService;
import com.stackroute.paymentservice.service.WalletService;
import com.stripe.model.Charge;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;


@RestController
@CrossOrigin("*")
@RequestMapping("/payment")
public class PaymentController {

    @Autowired
    private StripeClient stripeClient;

    @Autowired
    private WalletService walletService;

    @Autowired
    private TransactionService transactionService;

    ResponseEntity responseEntity;


    //  ------------------- Wallet Recharge --------------------------


    @PostMapping("/recharge")
    public Transaction rechargeCard(@RequestBody RechargeInfo rechargeInfo) throws Exception {
        String token = rechargeInfo.getToken();
        double amount = rechargeInfo.getAmount();
        String userID = rechargeInfo.getUserID();
        System.out.println(token);
        Charge data = this.stripeClient.chargeCreditCard(token, amount, userID);
        System.out.println(data);
        ResponseEntity<Charge> charge = new ResponseEntity<Charge>(new Charge(), HttpStatus.OK);
        return transactionService.makeTransaction(amount, userID, null, Transaction.type.CREDIT);
//        return data.toString();
    }


    //  ------------------- Wallet Debit --------------------------


    @PostMapping("/pay")
    public ResponseEntity<?> payForRide(@RequestBody BookingInfo bookingInfo) {
        double amount = bookingInfo.getFare();
        String userID = bookingInfo.getUserID();
        String bookingID = bookingInfo.getBooking_id();
        responseEntity = new ResponseEntity<Transaction>(transactionService.makeTransaction(amount, userID, bookingID, Transaction.type.DEBIT), HttpStatus.OK);
        return responseEntity;
    }


    //  ------------------- Wallet --------------------------

//
//    @GetMapping("/wallet/userID/{userID}")
//    public ResponseEntity<?> getWalletByUserID(@PathVariable String userID) {
//        responseEntity = new ResponseEntity<Wallet>(walletService.getWalletByUserID(userID), HttpStatus.OK);
//        return responseEntity;
//    }
    @GetMapping("/wallet/userId")
    public ResponseEntity<?> getWalletByUserID(@RequestHeader String userId) {
        System.out.println(userId);
    responseEntity = new ResponseEntity<Wallet>(walletService.getWalletByUserID(userId), HttpStatus.OK);
        System.out.println(responseEntity);
    return responseEntity;
    }


//    @PostMapping("/wallet/add/{userID}")
//    public ResponseEntity<?> addWallet(@PathVariable String userID) {
//        responseEntity = new ResponseEntity<Wallet>(walletService.addWallet(userID), HttpStatus.OK);
//        return responseEntity;
//    }

//    @PostMapping("/wallet/add")
//    public ResponseEntity<?> addWallet(@RequestHeader("userId") String userId) {
//        System.out.println(userId);
//        responseEntity = new ResponseEntity<Wallet>(walletService.addWallet(userId), HttpStatus.OK);
//
//        return responseEntity;
//    }

    @PutMapping("/wallet/update")
    public ResponseEntity<?> updateWallet(@RequestBody Wallet wallet) {
        responseEntity = new ResponseEntity<Wallet>(walletService.updateWallet(wallet), HttpStatus.OK);
        return responseEntity;
    }


//  ------------------- Transactions --------------------------


    @GetMapping("/transaction/id/{transactionID}")
    public ResponseEntity<?> getTransactionByID(@PathVariable String transactionID) {
        responseEntity = new ResponseEntity<Transaction>(transactionService.getTransactionByID(transactionID), HttpStatus.OK);
        return responseEntity;
    }

    @GetMapping("/transaction/bookingID/{bookingID}")
    public ResponseEntity<?> getTransactionByBookingID(@PathVariable String bookingID) {
        responseEntity = new ResponseEntity<Transaction>(transactionService.getTransactionByBookingID(bookingID), HttpStatus.OK);
        return responseEntity;
    }

    @PostMapping("/transaction/add")
    public ResponseEntity<?> addTransaction(@RequestBody Transaction transaction) {
        responseEntity = new ResponseEntity<Transaction>(transactionService.addTransaction(transaction), HttpStatus.OK);
        return responseEntity;
    }

    @GetMapping("/transaction/user")
    public ResponseEntity<?> getAllTransactionsByUserID(@RequestHeader String userID,@RequestParam(required = false) Integer pageLimit, @RequestParam(required = false) Integer pageNum) {
        responseEntity = new ResponseEntity<List<Transaction>>(transactionService.getAllTransactionsByUserID(userID,pageLimit,pageNum), HttpStatus.OK);
        return responseEntity;
    }



}
