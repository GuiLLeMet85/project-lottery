require('dotenv').config();
const mongoose = require('mongoose');
const BetUser = require ('../models/BetUser')
const User = require ('../models/User')
// Import the model

const betsUser = [
    {
    dateLottery: '2022-16-04',
    numbers: [{num0: 09, num1: 10, num2: 19, num3: 27, num4: 45, num5: 46}],    
    numComplem: 28,  
    numReint: 1,
    euroBet: 1,
    isPrized: false
    }
]

mongoose.connect(process.env.MONGO_URL)
  .then(x => console.log(`Connected to ${x.connection.name}`))
  .then(() => {
    return BetUser.create(betsUser)
  })
  .then(() => {
    console.log('Seed done 🌱');
  })
  .catch(e => console.log(e))
  .finally(() => {
    console.log('Closing connection');
    mongoose.connection.close();
  })

