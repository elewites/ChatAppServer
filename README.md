# ChatAppServer

This is the server side architecture for a React Chat application. 

Check out the client application that consumes this REST API here [ChatAppClient](https://github.com/elewites/ChatAppClient.git).

This server is built with the following technologies: 
- Node.js
- Express.js
- MongoDB
- Mongoose ODM
- Socket.io Server API

The server is deployed with Heroku.

# Purpose

1. I wanted to create a REST API for a client side chat application. 

2. I wanted more exposure to the design process involved in creating a full stack application. 
- The project gave me valuable experience with backend-frontend architecture and how these two components communicate to each other.  

2. I also wanted to explore using non relational databases, MongoDB in this case and the object data modeling library Mongoose. 

# Future Phases

Currently the server does not save each message sent by the user to the database. 

The only way the database is used, is to store user information. 

This allows the server to have access to user data whenever it is needed.

However, in later versions of the application, I will store messages sent by the user to the database. 

This is why in the `/models` folder, two files: `message.js` and `room.js` have been created. 

This models will be used to achieve said functionality. 

## Installation

The server is deployed to heroku but you can always clone and run it in your local machine. 
