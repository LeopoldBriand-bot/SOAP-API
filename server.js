/*jslint node: true */
"use strict";
import { listen } from 'soap';
import { createServer } from 'http';

import {service} from './service';

const xml = require('fs').readFileSync('wsdl.wsdl', 'utf8');

const port = process.env.port || 8001;

const server = createServer(function(request,response) {
    response.end("404: Not Found: "+request.url);
});

server.listen(port);
console.log('server initialized on ' + port);
listen(server, '/wsdl', service, xml);