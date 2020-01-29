'use strict';


/**
 * get current weather of a city
 *
 * citycode String String.ID of the city to get
 * returns List
 **/
exports.getWeatherId = function(citycode) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "cityName" : "new york",
  "cityCode" : "new york",
  "temperature" : 28
}, {
  "cityName" : "new york",
  "cityCode" : "new york",
  "temperature" : 28
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get current weather in all cities
 *
 * returns List
 **/
exports.getWeatherIdCities = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "cityName" : "new york",
  "cityCode" : "new york",
  "temperature" : 28
}, {
  "cityName" : "new york",
  "cityCode" : "new york",
  "temperature" : 28
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

