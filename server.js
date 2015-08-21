var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8888));

app.use(express.static(__dirname + '/public'));

app.get('/secret', function(request, response) {
  response.send('Welcome to the secret directory.');
})

app.use(function(request, response, next) {
  response.status(404).sendFile(__dirname + '/public/404.html');
});

app.listen(app.get('port'), function() {
  console.log('Hour Long Lunch is running at localhost:' + app.get('port'));
});