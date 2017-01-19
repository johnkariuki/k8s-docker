// Create application instance
const app = require('express')();

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

app.get('/foot', (req, res) => {
  res.status(200).json('Some data', process.env.USERNAME, process.env.PASSWORD);
  console.log('Updated');
  console.log('Env', process.env);
  console.log('Username', process.env.USERNAME);
  console.log('Password', process.env.PASSWORD);
});

//Start server
app.listen(port, () => console.log('Magic happens on port', port));

module.exports.app = app;