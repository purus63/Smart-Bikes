FROM openjdk:11
WORKDIR config-service/src
ADD ./target/config-service-1.0.0-SNAPSHOT.jar app3.jar
EXPOSE 8888
ENTRYPOINT ["java","-jar","app3.jar"]