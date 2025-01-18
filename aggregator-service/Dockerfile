FROM maven:3.9-eclipse-temurin-17 as builder
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src/ ./src/
RUN mvn package -DskipTests

FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=builder /app/target/aggregator-0.0.1-SNAPSHOT.jar aggregator.jar
EXPOSE 8080
CMD ["java", "-jar", "aggregator.jar"]
