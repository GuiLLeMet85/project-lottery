const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, 'Email is required.'],
  },
  hashedPassword: {
    type: String,
    required: [true, 'Password is required.']
  },
  username: {
    type: String,
    unique: true,
    required: [true, 'Username is required.'],
  },
  userPicture: {
    type: String,
    default: 'https://res.cloudinary.com/dnxl4zry6/image/upload/v1663025902/userProfile/es9pkrvyvdv2dtzotvjk.png'
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
},
  {
    timestamps: true
  });

module.exports = model("User", userSchema);