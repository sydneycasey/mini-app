const express = require('express');

const app = express();
const port = 5656;

app.get('/', (req, res) => {
  res.send('∆');
});


app.listen( () => { console.log(`listening at ${port}`); })