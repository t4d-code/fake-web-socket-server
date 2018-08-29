'use strict';

const OutgoingMessage = require('./OutgoingMessage');

class CounterOp {

  constructor() {
    this._type = 'counter';
  }

  register(mockWebSocketServer) {

    mockWebSocketServer.addOp(this._type, incomingMessage => {

      const interval = Number(incomingMessage.interval) || 500; // in milliseconds
      const take = Number(incomingMessage.take) || 9;
      let counter = -1;

      const handle = setInterval(() => {
        const done = ++counter >= take;
        done && clearInterval(handle);
        const outgoingMessage = new OutgoingMessage(counter, done);
        incomingMessage.webSocket.send(outgoingMessage.toString());
      }, interval)

    });

  }

}

module.exports = CounterOp;