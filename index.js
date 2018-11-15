var express = require('express');
var hb  = require('express-handlebars');
var bodyParser = require('body-parser');

var app = express();

app.engine('handlebars', hb({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// body parser for form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// serve css and images
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('home', {nav: false});
});

app.get('/nav', function (req, res) {
    res.render('home', {nav: true});
});






app.listen(process.env.PORT || 8080);
console.log('listening...');
