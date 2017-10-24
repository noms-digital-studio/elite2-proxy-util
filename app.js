'use strict';

const express = require('express');
const proxy = require('http-proxy-middleware');

const config = require('./config');
const generateApiGatewayToken = require('./apiGateway');


const app = express();

app.set('port', process.env.PORT || 3002);

const onProxyReq = (proxyReq, req) => {

    const gwToken = generateApiGatewayToken();
    proxyReq.setHeader('authorization', `Bearer ${gwToken}`);

    const authHeader = req.headers['elite-authorization'];
    if (authHeader !== undefined) {
        proxyReq.setHeader('elite-authorization', authHeader);
    }

};

const options = {
    target: config.nomis.target,
    changeOrigin: true,
    ws: true,
    pathRewrite: {
        '^/elite': ''
    },
    onProxyReq
};

const apiProxy = proxy(options);

app.use('/elite', apiProxy);

module.exports = app;


