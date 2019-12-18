package com.example.demo.service;

import com.example.demo.Exceptions.VehicleNotFoundException;
import com.example.demo.vehicle.Vehicle;

import java.util.List;
import java.util.UUID;

public interface Booking_Service {

    public Vehicle findByBooking_id(UUID id) throws VehicleNotFoundException;

    public List<Vehicle> find_by_user_id(String id) throws VehicleNotFoundException;

    public List<Vehicle> getAllVehicle(Integer pageLimit, Integer pageNum) throws VehicleNotFoundException;


}
