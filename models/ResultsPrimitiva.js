const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const resultsPrimitivaSchema = new Schema ({
    dateLottery: {
        type: Number,
         required: true,
    },
    yearLottery: {
        type: Number,
         required: true,
    },
    num1: {
        type: Number,
         required: true,
                unique: true,
    },
    num2: {
        type: Number,
         required: true,
        unique: true,
    },
    num3: {
        type: Number,
         required: true,
        unique: true,
    },
    num4: {
        type: Number,
         required: true,
        unique: true,
    },
    num5: {
        type: Number,
         required: true,
        unique: true,
    },	
    num6: {
        type: Number,
         required: true,
        unique: true,
    },
    numReint: {
        type: Number,
         required: true
    },
    numCompl: {
        type: Number,
         required: true
    }
},
{
  timestamps: true
});

module.exports = model("ResultPrimitiva", resultsPrimitivaSchema);