// Create application instance
const app = require('express')();
const axios = require('axios');

const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.status(200).json('welcome to root');
});

app.get('/foo', (req, res) => {
  res.status(200).json('welcome to foo');
});

app.get('/bar', (req, res) => {
  res.status(200).json('welcome to bar');
});

app.get('/baz', (req, res) => {
  res.status(200).json('Baz!');
});

//Get your Instagram profile
app.get('/my_ig', (req, res) => {
  axios
    .get('https://api.instagram.com/v1/users/self/?access_token=' + process.env.IG_ACCESS_TOKEN)
    .then(response => res.status(200).json(response))
    .catch((error) => res.status(500).json({ 'message': error}));
});

//Start server
app.listen(port, () => console.log('Magic happens on port', port));

module.exports.app = app;