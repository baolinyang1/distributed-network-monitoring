Distributed Network Monitoring Tool
Overview
The Distributed Network Monitoring Tool is a cloud-native application designed to monitor network and system metrics, providing real-time insights into latency, bandwidth usage, and system resource utilization. The system is built using a microservices architecture and deployed with Docker Compose.

Features
Google Latency Monitoring: Measure the round-trip time to Google's public DNS server (8.8.8.8).
Local Latency Monitoring: Measure the response time to the local router/gateway.
Bandwidth Monitoring: Track the amount of data sent and received.
System Metrics: Monitor CPU and memory usage.
Frontend Dashboard: Visualize metrics in a user-friendly React-based web interface.
Backend Services:
Collector Service: Collects real-time metrics using Python.
Aggregator Service: Aggregates metrics from the collector and exposes them via REST APIs.
Architecture
The project uses a distributed microservices architecture:

Collector Service:
Language: Python (Flask)
Function: Collects metrics such as Google latency, local latency, and bandwidth usage.
Aggregator Service:
Language: Java (Spring Boot)
Function: Aggregates data from the collector and serves it to the frontend via REST APIs.
Frontend:
Language: JavaScript/React
Function: Displays metrics in a web-based dashboard.
Deployment:
Docker Compose for container orchestration.
Technologies Used
Frontend: React, Axios
Backend: Spring Boot, Flask
Deployment: Docker Compose
Metrics Collection: Python libraries (ping3, psutil)
Setup and Usage
1. Prerequisites
Docker and Docker Compose installed on your system.
2. Clone the Repository
bash
Copy
Edit
git clone <repository-url>
cd distributed-network-monitoring
3. Build and Run the Application
bash
Copy
Edit
docker-compose build
docker-compose up
4. Access the Application
Frontend Dashboard: http://localhost:3000
Aggregator API: http://localhost:8080/aggregated-metrics
Collector API: http://localhost:5001/metrics
Endpoints
1. Collector Service
Endpoint: /metrics
Example Response:
json
Copy
Edit
{
    "google_latency_ms": 50.2,
    "local_latency_ms": 2.3,
    "data_sent_mb": 0.12,
    "data_received_mb": 0.34,
    "cpu_usage": 75.4,
    "memory_usage": 63.2,
    "timestamp": 1737180209.1404
}
2. Aggregator Service
Endpoint: /aggregated-metrics
Example Response:
json
Copy
Edit
{
    "google_latency_ms": 50.2,
    "local_latency_ms": 2.3,
    "data_sent_mb": 0.12,
    "data_received_mb": 0.34,
    "cpu_usage": 75.4,
    "memory_usage": 63.2,
    "timestamp": 1737180209.1404
}
