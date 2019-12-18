FROM openjdk:11
WORKDIR user-management-service/src
ADD ./target/user-management-1.0.0-SNAPSHOT.jar app5.jar
EXPOSE 8083
ENTRYPOINT ["java","-jar", "app5.jar"]