require('dotenv').config(); // Load .env first

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

const userRoutes = require('./routes/userRoutes');


app.use(cors());
app.use(express.json());
app.use('/api/users', require('./routes/userRoutes'));


// Load from .env or fallback
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://lithiras:lithiras@cluster1.vvz9zuy.mongodb.net/';

// MongoDB connection
mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Test API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
