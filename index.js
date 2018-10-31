var express = require('express');
var hb  = require('express-handlebars');

var app = express();

app.engine('handlebars', hb({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// serve css and images
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('home', {nav: false});
});

app.get('/nav', function (req, res) {
    res.render('home', {nav: true});
});




app.listen(8080);
console.log('listening...');
