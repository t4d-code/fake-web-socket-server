'use strict';

const WebSocket = require('ws');

class IncomingMessage {

  constructor(webSocket, rawMessage) {

    if (!(webSocket instanceof WebSocket)) {
      throw Error(`webSocket needs to be an instance of 'WebSocket'`);
    }
    this._webSocket = webSocket;

    const attributes = JSON.parse(rawMessage);
    if (typeof attributes.type !== 'string') {
      throw Error('The message \'type\' must be a string value.');
    }
    this._rawMessage = rawMessage;
    this._attributes = attributes;
  }

  get webSocket() {
    return this._webSocket;
  }
}

function IncomingMessageProxy(...params) {
  return Object.freeze(new Proxy(new IncomingMessage(...params), {
    get: (obj, prop) => prop in obj ? obj[prop] : obj._attributes[prop],
  }));
}

module.exports = IncomingMessageProxy;