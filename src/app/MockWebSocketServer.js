'use strict';

const WebSocket = require('ws');
const IncomingMessage = require('./IncomingMessage');

class MockWebSocketServer {

  constructor(options) {
    this._options = options;
    this._ops = {};
  }

  addOp(opType, opFn) {
    this._ops[opType] = opFn;
  }

  start() {

    this._options.ops.forEach(Op => (new Op()).register(this));

    const wss = new WebSocket.Server({ port: this._options.port });

    wss.on('listening', () => {
      console.log('mock web socket server started');
    });

    wss.on('connection', ws => {
      
      ws.on('error', err => {
        console.error(err);
      });

      ws.on('close', () => {
        console.log('websocket closed');
      });

      ws.on('message', rawMessage => {

        const incomingMessage = new IncomingMessage(ws, rawMessage);

        if (this._ops.hasOwnProperty(incomingMessage.type)) {
          this._ops[incomingMessage.type](incomingMessage);
        }

      });
    
    });

  }

}

module.exports = MockWebSocketServer;