var express = require ('express');
var session = require ('express-session');
var cookie = require ('cookie-parser');
var path = require ('path');
var ejs= require ('ejs');
var multer = require('multer');
var path = require ('path');
var async = require ('async');
var nodmailer = require ('nodemailer');
var crypto = require ('crypto');
var expressValidator = require ('express-validator');
var  sweetalert = require('sweetalert2');
var bodyParser = require ('body-parser');
var db = require ('./models/db_controller');
var signup = require ('./controllers/signup');
var login = require('./controllers/login');
var app = express();
app.set('view engine ', 'ejs');
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cookie());

var server =app.listen(3000 , function(){
  console.log('Server running on PORT 3000');
});

app.use('/signup' , signup);
app.use('/login' , login);