const express = require('express');
const cors = require('cors');
const contactRouter = require('./routers/contactRouter');
const applicationRouter = require('./routers/applicationRouter');

const app = express();
const port = 5000;
require('./connection');

// middleware
app.use(cors({
    origin: ['http://localhost:3000']
}));
app.use(express.json());
app.use('/contacts', contactRouter);
app.use('/applications', applicationRouter);

// route or endpoint
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

//start the server
app.listen(port, () => {
    console.log('server started');
})