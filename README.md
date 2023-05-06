# ChatAppServer

This is the server side architecture for a React Chat application. 

Check out the client application that consumes this REST API here [ChatAppClient](https://github.com/elewites/ChatAppClient.git).

This server is built with the following technologies: 
- Node.js
- Express.js
- MongoDB
- Mongoose ODM
- Socket.io Server API

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

The server is noy currently deployed but you clone and run it in your local machine. 

The server connects to a cloud-based MongoDB cluster but if you wish to use the code with your own cluster you must change
the `database_URI` variable in the `server.js` file.

Clone the repo and run `npm install`

Then run the following command to spin up the server `nodemon server.js` and if it runs succesfully the command line
should output `Server is running on port 3001`

Once the server is running, clone the client side repository [ChatAppClient](https://github.com/elewites/ChatAppClient.git). 

Install the the packages in client side with `npm install`

Then run `npm start`

Now both the frontend and backend sides of the application should be running. 

This should allow for proper use of the app, registration, login in, making posts and making comments on the posts. 
