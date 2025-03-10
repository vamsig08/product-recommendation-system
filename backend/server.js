const express = require('express');
const cors = require('cors');
const { recommendProducts, getProductById } = require('./recommendations');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/recommendations', (req, res) => {
  const { desiredEffects } = req.body;
  if (!desiredEffects || !Array.isArray(desiredEffects) || desiredEffects.length === 0) {
    return res.status(400).json({ error: 'Desired effects must be a non-empty array' });
  }
  const recommendations = recommendProducts(desiredEffects);
  res.json(recommendations);
});

app.get('/product/:id', (req, res) => {
  const product = getProductById(req.params.id);
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(product);
});

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});