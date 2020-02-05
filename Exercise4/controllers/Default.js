'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.getHelloWorld = function getHelloWorld (req, res, next) {
  Default.getHelloWorld()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getWeatherId = function getWeatherId (req, res, next) {
  var citycode = req.swagger.params['citycode'].value;
  Default.getWeatherId(citycode)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getWeatherIdCities = function getWeatherIdCities (req, res, next) {
  Default.getWeatherIdCities()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
