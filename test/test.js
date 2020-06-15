'use strict';
var BitMEXClient = require('../index');

var client = new BitMEXClient({apiKeyID: "YhwDIPnvtb_lumoW79xjoKjR", apiKeySecret: "2N6sj9eX4iYuwDqrisqU2slIXQ4TGQmitonS0l1YHaFlkakK"});

client.addStream('XBTUSD', 'order', function(data, symbol, table) {
  if(data.length > 0){
      const orders = data.map(o => ({ id: o.orderID, filled: o.cumQty, status: o.ordStatus }));
      console.log('Update on ' + table + ':' + symbol + '. New data:\n', orders[orders.length - 1], '\n');
  }
});

client.on('error', function(e) {
  console.error('Received error:', e);
});
