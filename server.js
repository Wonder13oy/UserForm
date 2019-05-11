const express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


var app = express();
//Create application
app.use(bodyParser());

app.use(express.static('.'));
app.get('/form', (req, res) => {
    res.sendFile('index.html',__dirname + '/' + 'index.html');
})

app.get('/formResponse', (req, res) => {
    //Prepare output in JSON format
    response = {
        title:req.query.title,
        first_name:req.query.first_name,
        middle_name:req.query.middle_name,
        last_name:req.query.last_name,
        email:req.query.email,
        number:req.query.number,
        airline:req.query.airline,
        destination:req.query.destination,
        departure:req.query.departure,
        return:req.query.return,
        cost:req.query.cost,
        payment_method:req.query.pmu,
        purpose:req.query.purpose
    }
    console.log(response);
    res.end(JSON.stringify(response));
})

var server = app.listen(8000, () => {
    var host = server.address().address;
    var port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
})