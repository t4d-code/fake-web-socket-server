'use strict';

const OutgoingMessage = require('./OutgoingMessage');

class EchoOp {

  constructor() {
    this._type = 'echo';
  }

  register(mockWebSocketServer) {

    const delay = Number(incomingMessage.delay) || 0; // in milliseconds

    mockWebSocketServer.addOp(this._type, incomingMessage => {

      setTimeout(() => {
        const outgoingMessage = new OutgoingMessage(incomingMessage.payload, true);
        incomingMessage.webSocket.send(outgoingMessage.toString());
      }, delay);

    });

  }

}

module.exports = EchoOp;