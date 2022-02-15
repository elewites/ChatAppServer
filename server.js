//libraries
const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { Server } = require("socket.io");

//model imports
const MessageModel = require("./models/message");
const RoomModel = require("./models/room");

//Middleware
app.use(cors());
dotenv.config();
app.use(express.json());

//App setup
const PORT = process.env.PORT || 3001;
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log("sever is running");
});

//database connection
mongoose
  .connect(
    `mongodb+srv://eros:better_together@cluster0.exjg5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("connected to db on port: " + PORT));

//routes and routers
app.get("/getmessages", async (req, res) => {
  const fetchedRoom = await RoomModel.findOne({ roomName: req.body.roomName });
  res.send(fetchedRoom.messages);
});

const userRouter = require("./routes/users");
app.use("/users", userRouter);

//Socket setup
const io = new Server(server, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("socket id: " + socket.id);

  //listening for a join_room event
  socket.on("join_room", async (data) => {
    socket.join(data.room);

    console.log(`${data.user} joined the room: ${data.room}`);
  });

  //listening for a send_text event
  socket.on("send_text", async (data) => {
    //emitting data to data.room through recieve_text event
    socket.to(data.room).emit("recieve_text", data.content);
    console.log(data);
  });

  //Runs when client disconnects
  socket.on("disconnect", () => {
    console.log(`USER disconnected`);
  });
});
