// Create application instance
const app = require('express')();
const needle = require('needle');

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
  needle
    .get('https://api.instagram.com/v1/users/self/?access_token=' + process.env.IG_ACCESS_TOKEN,
    (err, response, data) => {
      res.status(200).json(data);
    })

});

// Return 200 if everything is working fine. 
app.get('/health_check', (req, res) => res.status(200).json('ok!'));

//Start server
app.listen(port, () => console.log('Magic happens on port', port));

module.exports.app = app;