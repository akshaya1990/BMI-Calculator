const express = require('express')
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function () {
    console.log('I am listening on port 3000');
});

app.get('/', function(req, res) {
    res.send('Hello World!!!');
});

app.post("/bmiCalculator", function(req, res) {
   var weight = req.body.weight;
   var height = req.body.height;
   var bmi = weight / (height * height);
   res.send("your BMI is " + bmi);
});

app.get("/bmiCalculator", function(req, res) {
    res.sendFile(__dirname + '/bmiCalculator.html')
});

