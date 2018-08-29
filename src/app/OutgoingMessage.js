'use strict';

class OutgoingMessage {

  constructor(payload, done = false) {
    this._attributes = {
      payload,
      done,
    };
  }

  toString() {
    return JSON.stringify(this._attributes);
  }

}

module.exports = OutgoingMessage;