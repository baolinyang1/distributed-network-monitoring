# from flask import Flask, jsonify
# import random
# import time

# app = Flask(__name__)

# @app.route("/metrics")
# def get_metrics():
#     """
#     For simplicity, generate random metrics. In a real scenario, 
#     you would collect real data from the network or system.
#     """
#     metrics = {
#         "timestamp": time.time(),
#         "cpu_usage": round(random.uniform(0, 100), 2),
#         "memory_usage": round(random.uniform(0, 100), 2),
#         "network_latency_ms": round(random.uniform(1, 200), 2)
#     }
#     return jsonify(metrics)

# if __name__ == "__main__":
#     app.run(host="0.0.0.0", port=5001)
from flask import Flask, jsonify
from ping3 import ping
import psutil
import time

app = Flask(__name__)

@app.route("/metrics")
def get_metrics():
    """
    Collect network-related metrics:
    - Ping latency to Google and local router
    - Network bandwidth usage
    """
    # Ping latency
    google_latency = ping("8.8.8.8")  # Google's public DNS
    local_latency = ping("172.16.1.254")  # Local router IP (adjust based on your network)

    # Network bandwidth usage
    network_io = psutil.net_io_counters()

    metrics = {
        "timestamp": time.time(),
        "google_latency_ms": google_latency * 1000 if google_latency else None,
        "local_latency_ms": local_latency * 1000 if local_latency else None,
        "data_sent_mb": round(network_io.bytes_sent / (1024 * 1024), 2),  # Convert to MB
        "data_received_mb": round(network_io.bytes_recv / (1024 * 1024), 2),  # Convert to MB
    }

    return jsonify(metrics)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001)
