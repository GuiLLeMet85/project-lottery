const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const betUserSchema = new Schema ({
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    dateLottery: { type: String, required: true, default: Date },
    num0: { type: Number, required: true},
    num1: { type: Number, required: true},
    num2: { type: Number, required: true},
    num3: { type: Number, required: true},
    num4: { type: Number, required: true},
    num5: { type: Number, required: true},
    numReint: { type: Number, required: true },
    euroBet: { type: Number, default: 1},
    isPrized: { type: Boolean, default: false }
},
{
  timestamps: true
}
);

// betUserSchema.methods.formatDate = function(datePropery) {
//   const newDate = new Date(this[dateProperty]);
//   let formattedDate = `${ newDate.getFullYear() }-`;
//       formattedDate += `${ `0${ newDate.getMonth() + 1 }`.slice(-2) }-`;  // for double digit month
//       formattedDate += `${ `0${ newDate.getDate() }`.slice(-2) }`;        // for double digit day
//   return formattedDate;
// }

// const Example = new mongoose.model('Example', exampleSchema);

module.exports = model("BetUser", betUserSchema);