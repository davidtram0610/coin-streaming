const CoinbasePro = require('coinbase-pro');
const websocket = new CoinbasePro.WebsocketClient(['BTC-USD', 'ETH-USD']);

websocket.on('message', data => {
    /* work with data */
    console.log('Messages are coming in...');
    console.log('Data:', JSON.stringify(data));
});
websocket.on('error', err => {
    /* handle error */
    console.log('Messages are failing...');
    return;
});
websocket.on('close', () => {
    /* ... */
    console.log('Messages are closing...');
    return;
});