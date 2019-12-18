FROM openjdk:11
WORKDIR booking-servcie/src
ADD ./target/booking-service-1.0.0-SNAPSHOT.jar booking-service-1.0.0-SNAPSHOT.jar
EXPOSE 8090
ENTRYPOINT ["java", "-jar","booking-service-1.0.0-SNAPSHOT.jar"]
