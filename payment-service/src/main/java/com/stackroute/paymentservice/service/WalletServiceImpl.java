package com.stackroute.paymentservice.service;

import com.stackroute.paymentservice.model.Transaction;
import com.stackroute.paymentservice.model.Wallet;
import com.stackroute.paymentservice.repository.WalletRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WalletServiceImpl implements WalletService{

    @Autowired
    WalletRepository walletRepository;

    @Override
    public Wallet getWalletByUserID(String userID) {
        Wallet wallet = walletRepository.findByUserID(userID);
        return wallet;
    }

    @Override
    public Wallet addWallet(String userID) {
//      if(walletRepository.existsById(userID)== false){
        Wallet wallet = walletRepository.findByUserID(userID);
        if(wallet != null){
            return wallet;
        }
        wallet = new Wallet();
        wallet.setUserID(userID);
//        wallet.setBalance();
        walletRepository.save(wallet);
        return wallet;
//    }
//      Wallet wallet =
    }

    @Override
    public Wallet updateWallet(Wallet wallet) {
        walletRepository.save(wallet);
        return wallet;
    }
}
