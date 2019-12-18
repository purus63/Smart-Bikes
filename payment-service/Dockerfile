FROM openjdk:11
WORKDIR payment-service/src
ADD ./target/payment-service-1.0.0-SNAPSHOT.jar  app8.jar
EXPOSE 8086
ENTRYPOINT ["java","-jar","app8.jar"]