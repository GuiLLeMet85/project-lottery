const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const betUserSchema = new Schema ({
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    dateLottery: { type: String, required: true },
    num0: { type: Number, required: true, unique: true},
    num1: { type: Number, required: true, unique: true},
    num2: { type: Number, required: true, unique: true},
    num3: { type: Number, required: true, unique: true},
    num4: { type: Number, required: true, unique: true},
    num5: { type: Number, required: true },
    numComplem: { type: Number, required: true },
    numReint: { type: Number, required: true },
    euroBet: { type: Number, default: 1, required: true },
    isPrized: { type: Boolean, required: true }
},
{
  timestamps: true
});

module.exports = model("BetUser", betUserSchema);