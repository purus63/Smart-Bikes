package com.stackroute.notificationservice.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

@RestController
@CrossOrigin("*")
public class NotificationController {

    @Autowired
    private JavaMailSender sender;

    @GetMapping(value = "/sendMail" )
    public ResponseEntity sendMail(@RequestParam String email) {
        MimeMessage message = sender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);
        System.out.println(email);
        try {
	    helper.setFrom("boltbookingservice@gmail.com");
            helper.setTo(email);
            helper.setText("You are now a verified user");
            helper.setSubject("Mail from Bolt");
        } catch (MessagingException e) {
            e.printStackTrace();
            return ResponseEntity.ok("Error while sending mail ..");
        }
        sender.send(message);
        return ResponseEntity.ok("success");
    }
}


