const express = require('express');
const app = express();
const cors = require('cors'); 

app.use(cors());
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Hello, Dockerized Node.js!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});