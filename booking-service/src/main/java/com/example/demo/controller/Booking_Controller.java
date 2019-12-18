package com.example.demo.controller;

import com.example.demo.Exceptions.VehicleNotFoundException;
import com.example.demo.service.VehicleService;
import com.example.demo.vehicle.Vehicle;
//import org.h2.util.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;


@RestController
@RequestMapping("/booking-service")
@CrossOrigin("*")
public class Booking_Controller {

VehicleService vehicle_service;

@Autowired
public Booking_Controller(VehicleService vehService){
    this.vehicle_service = vehService;
}


@Autowired
    private KafkaTemplate<String, Vehicle> kafkaTemplate;

    private static final String TOPIC1 = "KafkaStartRide";
    private static final String TOPIC2 = "KafkaEndRide";
    private static final String TOPIC3 = "FeedBack";

//    @Autowired
//    private VehicleService vehicle_service;

ResponseEntity responseEntity;

@PostMapping("/start_ride")
public void register(@RequestBody Vehicle vehicle) {
    System.out.println(vehicle);
    try {
        Vehicle start_ride = vehicle_service.StartRide(vehicle);
        kafkaTemplate.send(TOPIC1, start_ride);
        responseEntity = new ResponseEntity<String>("Successfully created", HttpStatus.CREATED);
    } catch (Exception ex) {
        responseEntity = new ResponseEntity<String>(ex.getMessage(), HttpStatus.CONFLICT);
    }
    //return responseEntity;
}

//    @GetMapping("pause_ride")
//    public ResponseEntity<?> pause() {
//        try {
//            Vehicle pause_ride = vehicle_service.PauseRide();
//            responseEntity = new ResponseEntity<String>("Successfully created", HttpStatus.CREATED);
//        } catch (Exception ex) {
//            responseEntity = new ResponseEntity<String>(ex.getMessage(), HttpStatus.CONFLICT);
//        }
//        return responseEntity;
//    }
//        @GetMapping("restart_ride")
//        public ResponseEntity<?> restart() {
//            try {
//                Vehicle restart_ride = vehicle_service.RestartRide();
//                responseEntity = new ResponseEntity<String>("Successfully created", HttpStatus.CREATED);
//            } catch (Exception ex) {
//                responseEntity = new ResponseEntity<String>(ex.getMessage(), HttpStatus.CONFLICT);
//            }
//            return responseEntity;
//        }
@PostMapping("/end_ride")
public String end_ride(@RequestBody Vehicle vehicle) {

    Vehicle end_rid = null;
    try {
        end_rid =vehicle_service.EndRide(vehicle);
        kafkaTemplate.send(TOPIC2, end_rid);
        responseEntity = new ResponseEntity<String>("Successfully created", HttpStatus.CREATED);
    }
    catch (Exception ex) {
            responseEntity = new ResponseEntity<String>(ex.getMessage(), HttpStatus.CONFLICT);
        }
    String json="{" +"\"booking_id\"" + ":" + "\""+end_rid.getBooking_id()+"\""+","+"\"fare\""+":"+end_rid.getFare()+","+"\"duration\""+":"+end_rid.getDuration() +"}";

    //System.out.println("---------------------------------------------------------------");
    //System.out.println(json);
    //System.out.println("---------------------------------------------------------------");
    //return responseEntity;
    return  json;
}

    @PostMapping("/after_ride")
    public void after_ride(@RequestBody Vehicle vehicle) {
       Vehicle after_rid= vehicle_service.after_ride(vehicle);
       kafkaTemplate.send(TOPIC3, after_rid);
    }


    @PostMapping("/set_fare")
    public void set_dynamic_fare(@RequestBody double x) {
        try {
             vehicle_service.setFare_per_km(x);
            responseEntity = new ResponseEntity<String>("Successfully created", HttpStatus.CREATED);
        }
        catch (Exception ex) {
            responseEntity = new ResponseEntity<String>(ex.getMessage(), HttpStatus.CONFLICT);
        }
    }

@GetMapping("/all")
public ResponseEntity<?> getAllVehicle(@RequestParam(required = false) Integer pageLimit, @RequestParam(required = false) Integer pageNum) throws VehicleNotFoundException {
    try {
        responseEntity = new ResponseEntity<List<Vehicle>>(vehicle_service.getAllVehicle(pageLimit, pageNum), HttpStatus.OK);
    }
    catch (Exception ex1){
        responseEntity = new ResponseEntity<String>(ex1.getMessage(), HttpStatus.CONFLICT);
    }
    return responseEntity;
}

@GetMapping("/b/{id}")// handler method to retrieve all users
public ResponseEntity<?> findById(@PathVariable UUID id){
    ResponseEntity responseEntity;
    try{
        System.out.println("------ Controller new 100");
        vehicle_service.findByBooking_id(id);
        responseEntity = new ResponseEntity<Vehicle>(vehicle_service.findByBooking_id(id), HttpStatus.OK);
    }
    catch(Exception ex1){
        responseEntity = new ResponseEntity<String>(ex1.getMessage(), HttpStatus.CONFLICT);
    }
    return responseEntity;
}

    @GetMapping("/u/{id}")// handler method to retrieve all users
    public ResponseEntity<?> findById(@PathVariable String id){
        ResponseEntity responseEntity;
        try{
            System.out.println("------ Controller new 100");
            vehicle_service.find_by_user_id(id);
            responseEntity = new ResponseEntity<List<Vehicle>>(vehicle_service.find_by_user_id(id), HttpStatus.OK);
        }
        catch(Exception ex1){
            responseEntity = new ResponseEntity<String>(ex1.getMessage(), HttpStatus.CONFLICT);
        }
        return responseEntity;
    }

}
