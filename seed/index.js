require('dotenv').config();
const mongoose = require('mongoose');
const ResultsPrimitiva = require ('../models/ResultsPrimitiva.js');
const axios = require("axios");


const options = {
  method: 'GET',
  url: 'https://loterias-y-apuestas-del-estado.p.rapidapi.com/v1/loteria/resultados/primitiva',
  params: {date: '16-04-2022'},
  headers: {
    'X-RapidAPI-Key': 'a6804aafbfmsh8b92ba32ec000dfp10575ejsn7cf53d8bcce1',
    'X-RapidAPI-Host': 'loterias-y-apuestas-del-estado.p.rapidapi.com'
  }
};

// Place the array you want to seed

mongoose.connect(process.env.MONGO_URL)
  .then(x => console.log(`Connected to ${x.connection.name}`))
  .then(axios.request(options).then(function(response){
    const betsData=response.data.results 
    const filteredBets = betsData.map(ele=>{return ele})
    return ResultsPrimitiva.create(betsData)
  })
  .then(() => {
    console.log('Seed done 🌱');
  })
  .catch(e => console.log(e))
  .finally(() => {
    console.log('Closing connection');
    mongoose.connection.close();
  }))

// Run npm run seed 