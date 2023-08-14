'use strict';

const express = require('express');
const app = express();
const PORT = 8080;
const HOST = '0.0.0.0';
const axios = require('axios').default;
//we need express
//MÁV (hungarian railways) delay counter app

let map = new Map();


app.get('/',  (req, res) => {
  let sum = 0;
  map.forEach((value, key) => {
    if (typeof (value) == "number") {
      sum += value;
    }

  });

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>A mai nap soran a MAV ');
  res.write(sum.toString());
  res.write(' percet kesett</h1>');
  res.write('<h2>Today, the Hungarian National Railway had ');
  res.write(sum.toString());
  res.write(' minutes of delay collectively');
  res.end();

});

setInterval(() => {

  let date_time = new Date(Date.now());
  if (date_time.getHours == 0 && date_time.getMinutes == 0) {
    map.clear();
  }
  axios.post('http://vonatinfo.mav-start.hu/map.aspx/getData', { "a": "TRAINS", "jo": { "history": false, "id": false }})
  .then(function (response) {
      //console.log(response['data']['d']['result']['Trains']);
      const trains = response['data']['d']['result']['Trains']['Train'];
      //console.log(trains);

      trains.forEach(e => {
        map.set(e['@ElviraID'], e['@Delay']);

      });
      //console.log(map)
  })
  .catch(function (error) {
      console.log(error);
    });

  //the payload needed for the api is the following:
  //{"a":"TRAINS","jo":{"history":false,"id":false}}
  //http://vonatinfo.mav-start.hu/map.aspx/getData
}, 60000);

app.listen(PORT, HOST, () => {
  console.log(`Listening on ${HOST}:${PORT}`);
}); 
