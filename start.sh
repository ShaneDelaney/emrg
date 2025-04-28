#!/bin/bash

# Check if http-server is installed
if ! command -v http-server &> /dev/null; then
    echo "http-server not found, installing..."
    npm install -g http-server
fi

# Start the server
http-server -p 3001 -c-1 