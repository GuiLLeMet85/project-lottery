require('dotenv').config();
const mongoose = require('mongoose');
const BetUser = require ('../models/BetUser')
// Import the model

const betsuser = [
    {
    userId: "01",
    dateLottery: 16-04-2022,
    numbers: [
        num0: 09,
      },
      {
        num1: 10,
      },
      {
        num2: 19,
      },
      {
        num3: 27,
      },
      {
        num4: 45,
      },
      {
        num5: 46,
      },
    ]   
    },
    {
    numComplem: 28  
    },
    {
    numReint: 1
    },
    {
    euroBet: 1
    },
    {

    }


]


// Place the array you want to seed

mongoose.connect(process.env.MONGO_URL)
  .then(x => console.log(`Connected to ${x.connection.name}`))
  .then(() => {
    return // Model.create(array)
  })
  .then(() => {
    console.log('Seed done 🌱');
  })
  .catch(e => console.log(e))
  .finally(() => {
    console.log('Closing connection');
    mongoose.connection.close();
  })

// Run npm run seed 