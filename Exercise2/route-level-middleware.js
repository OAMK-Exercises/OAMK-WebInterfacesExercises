const express = require('express');
const router = express.Router();
const fs = require('fs')
const PORT = 3000;

/*****************************
 * 
 * MIDDLEWARE SECTION
 * 
 *****************************/

function headerEchoer(req, res, next) {
  console.log('Request headers:');
  for (let property in req.headers) {
    console.log(property + ' - ' + req.headers[property]);
  }

  next();
}

function loggerProperties(req, res, next) {
  fs.appendFile('logger-midd.txt', '-----Date: '+Date.now(),function (err) {
    if(err) throw err
  })
  fs.appendFile('logger-midd.txt', ': '+Date.now(),function (err) {
    if(err) throw err
  })
  
  next()
}

/*****************************
 * 
 * ROUTES
 * 
 *****************************/

/*
  Here a single middleware function called headerEchoer is given for a route.
*/

router.use('/', loggerProperties, (req, res, next) => {
  console.log("Time: " + Date.now())
  next()
})

router.use('/', loggerProperties, (req,res, next) => {
  console.log()
  next()
})

router.get('/demonstration', headerEchoer, (req, res) => {
  res.send('Another route which works');
});

/* 
  Each route can be given multiple middleware by passing them as an array.
*/
router.get('/multiple', [mw1, mw2, mw3], (req, res) => {
  console.log('Route handling started');
  res.send('Route with multiple middleware executed. See the server console log for mw output');
});


router.listen(PORT, () => console.log('Application started at http://localhost:' + PORT));

module.exports = router