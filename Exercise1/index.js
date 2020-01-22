const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

let users = [
  {
    id: 1,
    username: "test",
    name: "John Doe",
    dateOfBirth: "1990-05-20",
    address: "Measurement Street 567",
    city: "London",
    country: "uk",
    email: "john.doe@demo.com",
    sensors: [
      {
        id: 1,
        deviceType: "test",
        description: "dadad",
        location: {
          latitude: "1231.2",
          longitude: "21213.3"
        },
        sensorTypes: [
          "Temperature",
          "Wind"
        ]
      }
    ]
  }
];

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/users', (req, res) => {
  res.json(users);
})

app.post('/users', (req, res) => {
  console.log('Hello /users');

  if (req.body.hasOwnProperty('email')) {
    // I accept or validate more
    const result = {
      id: 234622
    };

    users.push({
      id: users.length + 1,
      username: req.body.username,
      name: req.body.name,
      dateOfBirth: req.body.dateOfBirth,
      address: req.body.address,
      city: req.body.city,
      country: req.body.country,
      email: req.body.email,
      sensors: []
    })

    res.status(201).json(users);
  }
  else {
    res.sendStatus(400);
  }



});

app.get('/users/:user/sensors', (req,res) => {


})

app.post('/users/:user/sensors', (req, res) => {
  console.log('Hello /users');

  if (req.body.hasOwnProperty('deviceType')) {
    const userSensors = req.params.sensors
    // I accept or validate more
    const result = {
      id: 234622
    };

    users.push({
      id: req.body.id,
      deviceType: req.body.deviceType,
      description: req.body.description,
      location: {
        latitude: req.body.location.latitude,
        longitude: req.body.location.longitude
      }
    })

    res.status(201).json(result);
  }
  else {
    res.sendStatus(400);
  }



});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))