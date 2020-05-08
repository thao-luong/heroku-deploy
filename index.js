//Install express server
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/ui-sdk-angular-examples'));
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(favicon(__dirname + '/public/favicon.ico'));
app.get('*', function(req,res) {

res.sendFile(path.join(__dirname +'/dist/ui-sdk-angular-examples/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 5000); 
