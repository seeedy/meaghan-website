var express = require('express');
var hb  = require('express-handlebars');

var app = express();

app.engine('handlebars', hb({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// serve css
app.use(express.static('static'));

app.get('/', function (req, res) {
    res.render('home');
});

app.listen(8080);
console.log('listening...');
