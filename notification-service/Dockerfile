FROM openjdk:11
WORKDIR notification-servcie/src
ADD ./target/notification-service-1.0.0-SNAPSHOT.jar notification-service-1.0.0-SNAPSHOT.jar
EXPOSE 8087
ENTRYPOINT ["java", "-jar","notification-service-1.0.0-SNAPSHOT.jar"]
