const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const path=require('path');
var passport = require('passport');
var authenticate = require('./authenticate');


// Loading routers
const bookRouter = require('./routes/api/bookRouter');
const userRouter = require('./routes/api/userRouter');
const issueRouter = require('./routes/api/issueRouter');
const app= express();

app.use(function(req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");

  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next();

});

// Bodyparser Middleware
// We get access to post data, and allows expres to read the body and parse it to a json obj we can understand.
app.use(bodyParser.json());

// DB config 
const mongoURI = require('./config/keys').mongoURI;

// Connect to mongo using mongoose middleware
mongoose.connect(mongoURI,{ useNewUrlParser: true, useCreateIndex: true,useFindAndModify:false })
.then(()=> {console.log("MongoDB Connected");})
.catch(err => console.log(err));

// Passport middleware takes care of supplying user credentials after user is authenticated successfully
app.use(passport.initialize());

// Use routes
app.use('/api/books',bookRouter);
app.use('/api/users',userRouter);
app.use('/api/issues',issueRouter);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

const port = process.env.PORT || 5000;

app.listen(port, ()=> {
  console.log(`Server started running on port ${port}.`);
});