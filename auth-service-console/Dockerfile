FROM openjdk:11
WORKDIR auth-service/src
ADD ./target/auth-service-console-1.0.0-SNAPSHOT.jar app11.jar
EXPOSE 8082
ENTRYPOINT ["java", "-jar", "app11.jar"]
