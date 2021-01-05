const express = require('express');

const app = express();
app.use(express.json());

const { PORT } = process.env;
app.use('/v1', require('./api'));


app.listen(PORT, () => {
  console.log(`Server initialized. Listening on ${PORT}`);
})