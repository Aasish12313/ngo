const express = require('express');
const cors = require('cors');

// Routers
const contactRouter = require('./routers/contactRouter');
const applicationRouter = require('./routers/applicationRouter');
const impactRouter = require('./routers/impactRouter'); // ✅ Fixed typo: 'impactRouters' -> 'impactRouter'
const galleryRouter = require('./routers/galleryRouter'); // ✅ Added
const testimonialRouter = require('./routers/testimonialRouter');
const eventRouter = require('./routers/eventRouter');

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
app.use('/gallery', galleryRouter); // ✅ Gallery route
app.use('/testimonial', testimonialRouter);
app.use('/events', eventRouter);

// Optional Test Routes (can be removed)
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