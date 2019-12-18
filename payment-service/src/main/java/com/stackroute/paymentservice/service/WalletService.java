package com.stackroute.paymentservice.service;

import com.stackroute.paymentservice.model.Transaction;
import com.stackroute.paymentservice.model.Wallet;

public interface WalletService {

    Wallet getWalletByUserID(String userID);

    Wallet addWallet(String userID);

    Wallet updateWallet(Wallet wallet);

}
