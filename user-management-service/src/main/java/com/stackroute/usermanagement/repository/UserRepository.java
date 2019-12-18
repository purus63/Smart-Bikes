package com.stackroute.usermanagement.repository;

import com.stackroute.usermanagement.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.math.BigInteger;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
}
