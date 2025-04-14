const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/register', (req, res) => {
  console.log('User data received:', req.body);
  res.json({ message: 'User registered successfully!' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
