package com.stackroute.paymentservice.model;

import lombok.*;

import java.time.LocalDateTime;


@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BookingInfo {
    private String booking_id;
    private String userID;
    private double fare;
//    private int initial_meter_reading;  //  from asset
//    private int final_meter_reading;   // manual
//    //@CreationTimestamp
//    private LocalDateTime starttime;
//    //@UpdateTimestamp
//    private LocalDateTime endtime;
//    private String start_station;
//    private String end_station;
//    private String vehicle_status;
//    private long duration;
//    private String status_of_ride;
//    private long pause_duration;
}
