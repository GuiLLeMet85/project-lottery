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

axios.request(options).then(function (response) {
	console.log(response.data.info);
}).catch(function (error) {
	console.error(error);
});