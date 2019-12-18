*******Running the System*******
Run ```mvn clean compile package``` on all the servicess

Basic BoilerPlate with Zuul,Eureka and Config MicroServices




Ports

zuul-Service : 8081

eureka-service : 8761

config-Service :8888

user-management-service: 8083


asset-management-service:8085
 

booking-service  : 8090

payment-service : 8086


auth-service : 8084


angular : 4200

RESTEndpoints:  
user-management :get - 8083/api/v1/users

booking:get -9090/v1/start_ride
asset-management-get -8085/api/v1/asset

