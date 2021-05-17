const CoinbasePro = require('coinbase-pro');

module.exports = (ws, req) => {
    const coinCurrencyPair = [req.params.pair];
    const websocket = new CoinbasePro.WebsocketClient(coinCurrencyPair);
    websocket.on('message', (data) => {
        /* work with data */
        console.log('Data:', JSON.stringify(data));
        ws.send(JSON.stringify(data));
    });
    websocket.on('error', (error) => {
        /* handle error */
        console.log('Messages are failing', error);
        ws.send(`Error: ${error}`)
    });
    websocket.on('close', () => {
        console.log('Closing socket...');
        ws.send('WS connection closed!');
    });
}

