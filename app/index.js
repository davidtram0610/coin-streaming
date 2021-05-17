const express = require('express');
const enableWs = require('express-ws')
const coinbaseStreaming = require('./controllers/coinbase-streaming');

const app = express();
enableWs(app);
const port = process.env.APPID || 8080;

app.ws('/api/v1/subscribe/:pair', coinbaseStreaming);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})



/* 
This is my attempt to use WebSocket. However, after being stuck with the URL param :pair for a while,
I decided to use a different solution which is express-ws
*/

// const express = require('express');
// const http = require('http');
// const WebSocket = require('ws');
// const coinbaseStreaming = require('./controllers/coinbase-streaming');

// const port = 8080;
// const server = http.createServer(express);
// const path = '/api/v1/subscribe/:pair';
// const wss = new WebSocket.Server({
//     server,
//     path,
// })

// wss.on('connection', coinbaseStreaming);

// wss.on('close', (wss, req) => {
//     console.log('Closing...');
//     ws.close();
// })

// server.listen(port, function () {
//     console.log(`Server is listening on ${port}!`)
// })