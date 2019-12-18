package com.stackroute.paymentservice.service;
import com.stripe.Stripe;
import com.stripe.model.Charge;
import com.stripe.model.Customer;
import com.stripe.model.Invoice;
import com.stripe.model.InvoiceItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class StripeClient {

  @Autowired
  StripeClient() {

    Stripe.apiKey = "sk_test_9X8zWySbvoTCcgBkRR3ppoqQ00vQVOGrSG";

  }

  public Charge chargeCreditCard(String token, double amount, String userID) throws Exception {

    Map<String,Object> customerParameter = new HashMap<String,Object>();
    customerParameter.put("email", userID);
    Customer newCustomer= Customer.create(customerParameter);
    System.out.println("Customer created successfully");

    Customer customer = Customer.retrieve(newCustomer.getId());

    Map< String,Object> source = new HashMap<String, Object>();
    source.put("source", token);
    customer.getSources().create(source);

    Map<String, Object> chargeParams = new HashMap<String, Object>();
    chargeParams.put("amount", (int)amount*100);
    chargeParams.put("currency", "inr");
    chargeParams.put("customer", customer.getId());

    Map<String, Object> invoiceItemParams = new HashMap<String, Object>();
    invoiceItemParams.put("customer", customer.getId());
    invoiceItemParams.put("amount", (int)amount*100);
    invoiceItemParams.put("currency", "inr");
    InvoiceItem.create(invoiceItemParams);

    Map<String, Object> invoiceParams = new HashMap<String, Object>();
    invoiceParams.put("customer", customer.getId());
    invoiceParams.put("collection_method", "charge_automatically");
    invoiceParams.put("auto_advance", false);
    Invoice newInvoice = Invoice.create(invoiceParams);

    Invoice invoice = Invoice.retrieve(newInvoice.getId());

    invoice.finalizeInvoice();


    return Charge.create(chargeParams);

  }

}
