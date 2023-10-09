// import
var express = require('express');
var path = require('path');
var connection = require('./app/model/index');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.get('/', async(req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/index', async(req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/profiles', async(req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'profiles.html'));
});

// functions
app.get('/api/data', function(req, res) {
    res.json({ message: 'Reading data through GET request' });
});

app.post('/api/data', function(req, res) {
    res.json({ message: 'Creating data through GET request' });
});

app.listen(3000, function() {
    console.log("Server is running succesfully on port 3000");
    connection.authenticate()
    .then(function() {
        console.log("Database terhubung");
    })
    .catch(function(error) {
        console.log("Error terhubung ke Database", error);
        process.exit();
    })
});