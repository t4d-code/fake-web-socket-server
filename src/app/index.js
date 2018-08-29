'use strict';

const MockWebSocketServer = require('./MockWebSocketServer');
const EchoOp = require('./EchoOp');
const CounterOp = require('./CounterOp');
const RandomNumberOp = require('./RandomNumberOp');

const getCommandLineOptions = () => {

  const commandLineArgs = require('command-line-args');

  const optionDefinitions = [
    { name: 'port', alias: 'p', type: Number, defaultValue: 8080 },
  ];
  
  return commandLineArgs(optionDefinitions);
};


module.exports = () => {
  
  const options = Object.assign({}, getCommandLineOptions(), {
    ops: [ EchoOp, CounterOp, RandomNumberOp ],
  });

  const mockWebSocketServer = new MockWebSocketServer(options);
  mockWebSocketServer.start();

};