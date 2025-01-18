// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [metrics, setMetrics] = useState(null);

//   useEffect(() => {
//     const fetchMetrics = async () => {
//       try {
//         const response = await axios.get('http://aggregator-service:8080/aggregated-metrics');
//         setMetrics(response.data);
//       } catch (error) {
//         console.error('Error fetching metrics:', error);
//       }
//     };
    
//     // Fetch every 5 seconds
//     fetchMetrics();
//     const interval = setInterval(fetchMetrics, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div style={{ padding: '2rem' }}>
//       <h1>Distributed Network Monitoring Dashboard</h1>
//       {metrics ? (
//         <div>
//           <p><strong>Timestamp:</strong> {metrics.timestamp}</p>
//           <p><strong>CPU Usage (%):</strong> {metrics.cpu_usage}</p>
//           <p><strong>Memory Usage (%):</strong> {metrics.memory_usage}</p>
//           <p><strong>Network Latency (ms):</strong> {metrics.network_latency_ms}</p>
//         </div>
//       ) : (
//         <p>Loading metrics...</p>
//       )}
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import axios from "axios";
function App() {
    const [metrics, setMetrics] = React.useState(null);
  
    React.useEffect(() => {
      const fetchMetrics = async () => {
        try {
          const response = await axios.get("http://localhost:8080/aggregated-metrics");
          setMetrics(response.data);
        } catch (error) {
          console.error("Error fetching metrics:", error);
        }
      };
  
      fetchMetrics();
      const interval = setInterval(fetchMetrics, 5000); // Fetch metrics every 5 seconds
      return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);
  
    if (!metrics) {
      return <h1>Loading metrics...</h1>;
    }
  
    return (
      <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
        <h1>Simple Network Monitoring Dashboard</h1>
        <p><strong>CPU Usage:</strong> {metrics.cpu_usage}%</p>
        <p><strong>Memory Usage:</strong> {metrics.memory_usage}%</p>
        <p><strong>Google Latency:</strong> {metrics.google_latency_ms} ms</p>
        <p><strong>Local Latency:</strong> {metrics.local_latency_ms || "Unreachable"}</p>
        <p><strong>Data Sent:</strong> {metrics.data_sent_mb} MB</p>
        <p><strong>Data Received:</strong> {metrics.data_received_mb} MB</p>
      </div>
    );
  }
  
// function App() {
//   const [metrics, setMetrics] = useState(null);

//   useEffect(() => {
//     const fetchMetrics = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/aggregated-metrics");
//         console.log("Fetched Metrics:", response.data); // Log the fetched data
//         setMetrics(response.data);  // Update state
//       } catch (error) {
//         console.error("Error fetching metrics:", error); // Log errors
//       }
//     };
  
//     fetchMetrics();
//     const interval = setInterval(fetchMetrics, 5000); // Poll every 5 seconds
//     return () => clearInterval(interval);
//   }, []);
  
//   return (
//     <div style={{ padding: "2rem" }}>
//       <h1>Simple Network Monitoring Dashboard</h1>
//       {metrics ? (
//         <div>
//           <p><strong>Google Latency (ms):</strong> {metrics.google_latency_ms || "N/A"}</p>
//           <p><strong>Local Latency (ms):</strong> {metrics.local_latency_ms || "N/A"}</p>
//           <p><strong>Data Sent (MB):</strong> {metrics.data_sent_mb}</p>
//           <p><strong>Data Received (MB):</strong> {metrics.data_received_mb}</p>
//         </div>
//       ) : (
//         <p>Loading metrics...</p>
//       )}
//     </div>
//   );
// }

export default App;
