/*jslint node: true */
"use strict";
import * as soap from 'soap';
import bodyParser from 'body-parser'
import express from 'express';
import {service} from './service';

const xml = require('fs').readFileSync('wsdl.wsdl', 'utf8');

const port = process.env.port || 8001;

var app = express();
app.use(bodyParser.raw({type: function(){return true;}, limit: '5mb'}));
app.listen(port, function(){
    soap.listen(app, '/wsdl', service, xml, function(){
    console.log('server initialized on ' + port);
    });
});
