const express = require('express');
const cors = require('cors');

// Routers
const contactRouter = require('./routers/contactRouter');
const applicationRouter = require('./routers/applicationRouter');
const impactRouter = require('./routers/impactRouter'); // ✅ Added Impact Router

const app = express();
const port = 5000;

// Database connection
require('./connection');

// Middleware
app.use(cors({
  origin: ['http://localhost:3000']
}));
app.use(express.json());

// API Routes
app.use('/contacts', contactRouter);
app.use('/applications', applicationRouter);
app.use('/impact', impactRouter); // ✅ Impact route

// Test Routes
app.get('/', (req, res) => {
  res.send('response from express');
});

app.get('/add', (req, res) => {
  res.send('response from add');
});

app.get('/getall', (req, res) => {
  res.send('response from getall');
});

app.get('/delete', (req, res) => {
  res.send('response from delete');
});

// Start the server
app.listen(port, () => {
  console.log(`✅ Server started on http://localhost:${port}`);
});
