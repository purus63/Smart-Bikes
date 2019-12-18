FROM openjdk:11
WORKDIR asset-management-service/src
ADD ./target/asset-management-service-1.0.0-SNAPSHOT.jar  app9.jar
EXPOSE 8085
ENTRYPOINT ["java","-jar","app9.jar"]
