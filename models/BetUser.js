const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const betUserSchema = new Schema ({
    userId: {
        type: [String]
    },
    dateLottery: {
        type: Date,
         required: true,
    },
    numbers: [{
        num0: {
         type: Number,
         required: true
        },
        num1: {
         type: Number,
         required: true
        },
        num2: {
         type: Number,
         required: true
        },
        num3: {
         type: Number,
         required: true
        },
        num4: {
         type: Number,
         required: true
        },
        num5: {
         type: Number,
         required: true
        }
    }],
    numComplem: {
         type: Number,
         required: true
     },
    numReint: {
         type: Number,
         required: true
     },
    euroBet: {
        type: Number,
         default: 1,
        required: true
    },
    isPrized: {
        type: Bolean,
        required: true
    }
},
{
  timestamps: true
});

module.exports = model("BetUser", betUserSchema);