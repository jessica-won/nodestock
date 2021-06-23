// Stock Market Portfolio App

const express = require('express');
const app = express();
const exphbs  = require('express-handlebars');
const path = require('path');
const request = require('request');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;

// use body parser middleware
app.use(bodyParser.urlencoded({extended: false}));

// API Key pk_c2f55eb338924babb306954aadcfd397
// create call_api function
function call_api(finishedAPI, ticker) {
request('https://cloud.iexapis.com/stable/stock/' + ticker + '/chart/5dm?token=pk_c2f55eb338924babb306954aadcfd397', { json: true },  (err, res, body)=> {
    if (err) {return console.log(err);}
    if (res.statusCode === 200){
        //console.log(body);
        finishedAPI(body);
        };
    });
};
function call_api2(finishedAPI, ticker) {
    request('https://cloud.iexapis.com/stable/stock/' + ticker + '/quote?token=pk_c2f55eb338924babb306954aadcfd397', { json: true },  (err, res, body)=> {
        if (err) {return console.log(err);}
        if (res.statusCode === 200){
            //console.log(body);
            finishedAPI(body);
            };
        });
    };

// Set Handlebars Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const otherstuff = "hello there, this is otherstuff!";

//Set handlebar index GET route

app.get('/stock.html', function (req, res) {
    call_api2(function(doneAPI){
        res.render('stock', {
        stock: doneAPI
    });
}, "fb");
});


//Set handlebar index POST route
app.post('/stock.html', function (req, res) {
    call_api2(function(doneAPI){
            // posted_stuff = req.body.stock_ticker;
            res.render('stock', {
            stock: doneAPI,
        });
    }, req.body.stock_ticker);
});

//Set handlebar index GET route

app.get('/stock2.html', function (req, res) {
    call_api2(function(doneAPI){
        res.render('stock2', {
        stock: doneAPI
    });
}, "fb");
});


//Set handlebar index POST route
app.post('/stock2.html', function (req, res) {
    call_api2(function(doneAPI){
            // posted_stuff = req.body.stock_ticker;
            res.render('stock2', {
            stock: doneAPI,
        });
    }, req.body.stock_ticker);
});

//Set handlebar index GET route

app.get('/stock3.html', function (req, res) {
    call_api2(function(doneAPI){
        res.render('stock3', {
        stock: doneAPI
    });
}, "fb");
});


//Set handlebar index POST route
app.post('/stock3.html', function (req, res) {
    call_api2(function(doneAPI){
            // posted_stuff = req.body.stock_ticker;
            res.render('stock3', {
            stock: doneAPI,
        });
    }, req.body.stock_ticker);
});

//Set handlebar index GET route

app.get('/stock4.html', function (req, res) {
    call_api2(function(doneAPI){
        res.render('stock4', {
        stock: doneAPI
    });
}, "fb");
});


//Set handlebar index POST route
app.post('/stock4.html', function (req, res) {
    call_api2(function(doneAPI){
            // posted_stuff = req.body.stock_ticker;
            res.render('stock4', {
            stock: doneAPI,
        });
    }, req.body.stock_ticker);
});

// Create login page route
app.get('/login.html', function (req, res) {
    res.render('login');
});

// Create mission page route
app.get('/mission.html', function (req, res) {
    res.render('mission');
});

// Create coursedetail page route
app.get('/coursedetail.html', function (req, res) {
    res.render('coursedetail');
});

// Create dashboard page route
app.get('/dashboard.html', function (req, res) {
    res.render('dashboard');
});

// Create index page route
app.get('/index.html', function (req, res) {
    res.render('index');
});

// Create index page route
app.get('/signup.html', function (req, res) {
    res.render('signup');
});

// Create login page route
app.get('/login2.html', function (req, res) {
    res.render('login2');
});

// Create mission page route
app.get('/mission2.html', function (req, res) {
    res.render('mission2');
});

// Create coursedetail page route
app.get('/coursedetail2.html', function (req, res) {
    res.render('coursedetail2');
});

// Create dashboard page route
app.get('/dashboard2.html', function (req, res) {
    res.render('dashboard2');
});

// Create index page route
app.get('/index2.html', function (req, res) {
    res.render('index2');
});

// Create index page route
app.get('/signup2.html', function (req, res) {
    res.render('signup2');
});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log('Server Listening on port ' + PORT));
