package com.stackroute.paymentservice.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.UUID;


@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Document
public class Transaction {

    @Id
    private String transactionID;
    private String userID;
    private String bookingID;
    private double amount;
    private LocalDateTime timeStamp;

    private type type;
    public enum type{
        CREDIT,
        DEBIT
    }
}
