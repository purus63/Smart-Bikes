package com.bool.AssetManagement.domain;

import lombok.*;
import org.springframework.data.annotation.PersistenceConstructor;

import java.sql.Timestamp;
import java.util.UUID;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class FeedBack {
    private java.util.UUID booking_id;
    private String vehicle_id ;
    private String user_id ;
    private int initial_meter_reading;
    private int final_meter_reading;
    private Timestamp starttime;
    private Timestamp endtime;
    private String start_station;
    private String end_station;
    private String vehicle_status;
    private long duration;
    private String status_of_ride;
    private long pause_duration;
    private int charge;
    private double fare;
    private String comment;
    private String rating;

}
