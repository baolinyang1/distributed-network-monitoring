// package com.example.aggregator;

// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RestController;
// import org.springframework.web.client.RestTemplate;

// import java.util.Map;

// @RestController
// public class AggregatorController {
    
//     private final RestTemplate restTemplate = new RestTemplate();

//     @GetMapping("/aggregated-metrics")
//     public Map<String, Object> getAggregatedMetrics() {
//         // For demo: fetch from Collector's endpoint
//         String collectorUrl = "http://collector-service:5001/metrics";
        
//         Map<String, Object> collectorMetrics = restTemplate.getForObject(collectorUrl, Map.class);

//         // Additional processing or filtering can go here

//         return collectorMetrics;
//     }
// }
package com.example.aggregator;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@RestController
public class AggregatorController {

    private final RestTemplate restTemplate = new RestTemplate();

    @GetMapping("/aggregated-metrics")
    public Map<String, Object> getAggregatedMetrics() {
        String collectorUrl = "http://collector-service:5001/metrics";
        
        // Fetch metrics from the collector-service
        Map<String, Object> collectorMetrics = restTemplate.getForObject(collectorUrl, Map.class);

        // Optionally process metrics (e.g., add alerts)
        return collectorMetrics;
    }
}
