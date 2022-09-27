const mongoose = require('mongoose');
const { Schema, model } = mongoose;

  const primitivaSchema = new Schema ({
      date: { type: Date, required: true },
      num0: { type: Number, required: true},
      num1: { type: Number, required: true},
      num2: { type: Number, required: true},
      num3: { type: Number, required: true},
      num4: { type: Number, required: true},
      num5: { type: Number, required: true},
      numCompl: { type: Number, required: true },
      numReint: { type: Number, required: true },
      Joker: { type: Number }
  },
{
  timestamps: true
}
);
module.exports = model("Primitiva", primitivaSchema);