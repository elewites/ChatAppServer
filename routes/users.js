const express = require("express");
const router = express.Router();

//authentication middleware
const validateToken = require("../middlewares/authMiddleware");

//model imports
const UserModel = require("../models/user");

//EFFECTS: authenticates user,
//         if user info is not in database, it adds user information to the database;
//         or updates new user info to an already existing user in database
router.get("/login", validateToken, async (req, res) => {
  console.log(req.payload);
  //extracting user data from payload
  const payload = req.payload;
  const user_id = payload.sub;
  const name = payload.name;
  const email = payload.email;
  const picture = payload.picture;

  //checking if user already exists in database
  const fetchedUser = await UserModel.findOne({ user_id });
  if (fetchedUser) {
    //if user exists, always update user info to have latest user data
    fetchedUser.name = name;
    fetchedUser.email = email;
    fetchedUser.picture = picture;
    await fetchedUser.save();
    //send back authenticated token to frontend to store in session
    res.send("user's data has been updated");
  } else {
    //add user to database if does not exist
    const newUser = new UserModel({ user_id, name, email, picture });
    await newUser.save();
    //sends back authenticated token to frontend to store in session
    res.send("new user has been created");
  }
});

//EFFECTS: authenticates web token stored in session,
//         and returns user info stored in payload as json;
//         req.payload is passed as request variable in authMiddleware.js;
//         This route used by App.js in frontend to update authentication state
router.get("/auth", validateToken, (req, res) => {
  res.json(req.payload);
});

//MODIFIES: user in database
//EFFECTS: updates current room of user in database
router.post("/updateroom", async (req, res) => {
  const user_id = req.body.userId;
  const room = req.body.roomName;
  const fetchedUser = await UserModel.findOne({ user_id })
  fetchedUser.currentRoom = room;
  console.log(fetchedUser)
  await fetchedUser.save();
})

router.post("/getroom", async (req, res) => {
  console.log(req.body)
  const user_id = req.body.userId;
  const fetchedUser = await UserModel.findOne({ user_id })
  res.send(fetchedUser.currentRoom)
})

module.exports = router;
