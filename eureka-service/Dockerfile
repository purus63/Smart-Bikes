FROM openjdk:11
WORKDIR eureka-service/src
ADD ./target/eureka-service-1.0.0-SNAPSHOT.jar app2.jar
EXPOSE 8761
ENTRYPOINT ["java","-jar","app2.jar"]