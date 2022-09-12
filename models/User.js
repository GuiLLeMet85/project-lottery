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
    default: '/files-upload/user-profile.png'
  },
  phoneNum: {
    type: Number,
    unique: true,
    required: [true, 'Phone is required.']
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