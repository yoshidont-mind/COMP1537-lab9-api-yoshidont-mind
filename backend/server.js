// Import the express module to set up the server
const express = require('express');
const app = express();

// Import the cors module to allow cross-origin resource sharing
const cors = require('cors');
app.use(cors());

// Import the node-fetch module to make HTTP requests
const fetch = require('node-fetch');

// Listen on port 3000 and when the server starts, log a message to the console
app.listen(3000, () => {
    console.log('Server is running on port 3000.');
});

// Define a route handler for GET requests to the root URL ('/')
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + `/index.html`);
// });

// Apply middleware for parsing URL-encoded bodies (form data)
// app.use(express.urlencoded({ extended: true }))

// Define a route handler for POST requests to '/getCityWeather'
app.get('/getCityWeather', async (req, res) => {
    resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.cname}&appid=4280a84bdfd2271f09739c99ba7ae827&units=metric`)
    jsonResp = await resp.json()
    res.send(jsonResp);
});