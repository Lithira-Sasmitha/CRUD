
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on: http://localhost:${port}`);
});