const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const resultsPrimitivaSchema = new Schema ({
    
    numbers: {
        reintegro : {type: Number},
        numeros: [

        ]

        0: {
         type: Number
        },
        1: {
         type: Number
        },
        2: {
         type: Number
        },
        3: {
         type: Number
        },
        num4: {
         type: Number
        },
        num5: {
         type: Number
        }  
    }
    ],
{
  timestamps: true
});

module.exports = model("ResultPrimitiva", resultsPrimitivaSchema);