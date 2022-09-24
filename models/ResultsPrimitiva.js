const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const resultsPrimitivaSchema = new Schema ({

// info: {
//         prizes: [
//             {
//                values: [ 
//                     {
//                         0: [
//                                 {
//                                     name: String,
//                                     value: Number
//                                 }
//                             ],
//                         1: [
//                                 {
//                                     name: String,
//                                     value: Number
//                                 },
//                         ]
                
//                     }
//                ]
    
//             }
//         ]
//     }





// } 


    numeros: {
            type:[],
            default: [1, 2, 3, 4, 5, 6]
    },
    
    date: {type: Date},
    reintegro: { type: Number },
    complementario: { type: Number },
});

module.exports = model("ResultPrimitiva", resultsPrimitivaSchema);
