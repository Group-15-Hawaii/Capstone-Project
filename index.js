var express = require('express');
var app = express();
var path = require('path');

app.get('/api/data', function(req, res) {
    res.json({ message: 'Reading data through GET request' });
});

app.post('/api/data', function(req, res) {
    res.json({ message: 'Creating data through GET request' });
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async(req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/index', async(req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/profiles', async(req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'profiles.html'));
});

app.listen(3000, () => {
    console.log("Server is running succesfully on port 3000");
});