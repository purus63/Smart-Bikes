package com.stackroute.paymentservice.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Document
public class Wallet {

    @Id
    private String userID;
    private double balance;
//    int minimumBalance;
//    private String[] transactionIDList;
}
