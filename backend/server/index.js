const express = require('express');
const app = express();
const PORT = 5000;

// Rota básica para teste
app.get('/api', (req, res) => {
  res.json({ message: "API is running!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});