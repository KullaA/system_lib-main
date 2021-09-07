const express = require('express');
const cors = require('cors');
const app = express();

//Cross origin resourse sharing 
const whitelist = ['http://localhost:3000', 'http://localhost:5000','https://system_lib-main.herokuapp.com/','https://system_lib-main.herokuapp.com:3000','https://system_lib-main.herokuapp.com:5000'];
var corsOptionsDelegate = (req, callback) => {
    var corsOptions;
    console.log(req.header('Origin'));
    if(whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true };
    }
    else {
        corsOptions = { origin: false };
    }
    callback(null, corsOptions);
};

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);