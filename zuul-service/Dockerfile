FROM openjdk:11
WORKDIR zuul-service/src
ADD ./target/zuul-service-1.0.0-SNAPSHOT.jar app.jar
EXPOSE 8081
ENTRYPOINT ["java","-jar", "app.jar"]
