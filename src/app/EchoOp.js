'use strict';

const OutgoingMessage = require('./OutgoingMessage');

class EchoOp {

  constructor() {
    this._type = 'echo';
  }

  register(mockWebSocketServer) {

    mockWebSocketServer.addOp(this._type, incomingMessage => {
      const outgoingMessage = new OutgoingMessage(incomingMessage.payload, true);
      incomingMessage.webSocket.send(outgoingMessage.toString());
    });

  }

}

module.exports = EchoOp;