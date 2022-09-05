const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const resultsPrimitivaSchema = new Schema ({
    dateLottery: {
        type: Number,
         required: true,
    },
    numbers: {
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
    },
    numComplem: {
        type: Number,
        required: true
    },
    numReint: {
        type: Number,
        required: true
    }
},
{
  timestamps: true
});

module.exports = model("ResultPrimitiva", resultsPrimitivaSchema);