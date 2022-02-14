const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  user_id: String,
  name: String,
  email: String,
  picture: String,
  currentRoom: String,
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
