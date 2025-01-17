# Websockets

This repository contains a simple WebSocket-based application that demonstrates the basics of WebSocket communication between a client and a server. The client-side code is built using React, while the server-side code uses Node.js with the `ws` library.

## Overview

WebSockets provide a persistent connection between a client and a server, enabling real-time, two-way communication. Unlike traditional HTTP, where the client must request data, WebSockets allow the server to push data to the client as soon as it is available.

### Key Features

- **Real-time Communication**: Enables both the client and server to send messages to each other in real-time.
- **Broadcasting**: The server can broadcast messages to all connected clients.
- **Client Connection Management**: The server manages and tracks the number of connected clients.


### Server-side

The server is built using Node.js with the `ws` library. It handles WebSocket connections, broadcasts messages to all clients, and tracks the number of users connected.

### Client-side

The client is a React application that connects to the WebSocket server. It allows users to send messages to the server and displays the latest message received from the server.

## How to Run

1. **Clone the Repository**  
   Clone the repository to your local machine.

2. **Install Dependencies**  
   Install the necessary dependencies using `npm install`.

3. **Run the Server**  
   Start the WebSocket server.

4. **Run the Client**  
   Start the React app and open it in your browser.

5. **Interact with the WebSocket**  
   Type a message in the input box and send it to the server. The server will broadcast the message to all connected clients.

## Conclusion

This app serves as a basic demonstration of WebSocket communication in a real-time application. You can extend this example to include additional features such as authentication, custom events, or integration with a backend system.

## License

This project is licensed under the MIT License.
