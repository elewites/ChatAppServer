# ChatAppServer

This is the client side architecture for a React Chat application. In the app, users are able to login/register with Google. 

This was developed using the [OAuth2.0 library](https://developers.google.com/identity/protocols/oauth2). 

Once the user is registered, they are able to join their room of preference to chat with other users. [Socket.io client](https://socket.io/) was used 
to create web sockets that allow the user to send real time data to the server and back. 

The application makes use of my own backend API. You can check out the repo here [ChatAppServer](https://github.com/elewites/ChatAppServer). 


The app is also deployed with Netlify and can be accessed here: [StudentCord](https://student-cord.netlify.app/).


[![Netlify Status](https://api.netlify.com/api/v1/badges/9b56ce4a-00e8-407c-b862-181d3dc7ee53/deploy-status)](https://app.netlify.com/sites/crypt0-app/deploys)


# Purpose

I wanted to improve my skills using websockets and incorportate this into a full stack application. 
I also wanted to explore using [Google OAuth2.0 library](https://developers.google.com/identity/protocols/oauth2) since it has become a very popular 
form of authentication in web applications. 

## Installation

The app is already deployed so you can play around with the final product using this [link](https://student-cord.netlify.app/).

If you wish to run the app locally, clone this repo and install the dependencies. 

```
$ git clone https://github.com/elewites/ChatAppClient.git
$ cd chatapp
$ npm install 
```

Once the dependencies install, run the following command on your terminal:

`npm start`

This will run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Learn More 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## App Design
- The app is built as a responsive web app to fit desktop, laptop, and mobile screens.

## User Stories
### The following user stories helped me organize the development of the app and visualize the end result. 

1. In this app the user is able to authenticate their persona with Google. This allows them to register/login easily into the application. 

2. The user is able to select a room of their choice from a list of 5 rooms. 

3. Once the user has connected to a room, they are able to send messages to the room and recieve messages from everyone else in the room. 

- e.g. Displaying the price of bitcoin in USD or EUR is the user's choice.

4. The user is able to logout whenever they want via a logout button.

5. The login state of the user persists for a period of time in session storage until the application is closed.
