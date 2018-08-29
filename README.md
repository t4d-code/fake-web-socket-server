# Fake Web Socket Server

Get a web socket server which generates fake data in 30 seconds or less.

## Install the Server

To add the fake web socket server to your application, run the following command in a terminal window within your project's top-level folder (where **package.json** lives)

```bash
npm install -D -E fake-web-socket-server
```

This command will install and register the fake web socket server as a development dependency (not poluting your production releases). Also, the version number will be fixed to prevent against future upgrades from breaking your code.

## Run the Server

If you running a newer version of Node.js which supports the **npx** command, you can run the server from the a terminal window within the project's top-level folder using the following command:

```bash
npx fake-web-socket-server
```

If you would like to run the server as part of you **npm** scripts configuration, thenm odify your **package.json** file by adding a new scripts entry.

```json
{
  /* other entries */
  "scripts": {
    /* other entries */
    "fake-web-socket-server": "fake-web-socket-server"
  }
}
```

From a terminal window within your project's top-level folder run the following command:

```bash
npm run fake-web-socket-server
```

## Server Options

--port, -p - set the port number, the default port is 8080

## Example Code

With the JavaScript of your web application, run the following code:

```javascript

// ensure the port number matches the default one or the one you specified from the command line
const webSocket = new WebSocket('ws://localhost:8080');

webSocket.addEventListener('message', message => {
  console.log(JSON.parse(message.data));
});

webSocket.addEventListener('open', () => {

  webSocket.send(JSON.stringify({
    type:'echo',
    payload: 'test',
  }));

});
```

Load the web page into your web browser, then open the console in the browser's development tools. The echo content should appear.

## API

Each message should be given a type. The supported types are:

- echo - echos the payload back immediately
- counter - generates 10 numbers on a fixed interval of 500 milliseconds
- random_number - generates 10 random numbers (0 to 1) on a fixed interval of 500 milliseconds

Each type supports additional options:

### Echo Type

Option(s):

- delay - the delay (in milliseconds) before sending the echoed payload from the server

Code Example:

```javascript
webSocket.send(JSON.stringify({
  type:'echo',
  payload: 'test',
  delay: 1000, // delay 1 second (1000 milliseconds)
}));
```

### Counter Type

Option(s):

- interval - the interval (in milliseconds) between each number sent from the server
- take - the number of numbers to send

Code Example:

```javascript
webSocket.send(JSON.stringify({
  type:'counter',
  interval: 2000, // send a number every two seconds (2000 milliseconds)
  take: 100, // send 100 numbers
}));
```

### Random Number Type

Option(s):

- interval - the interval (in milliseconds) between each random number sent from the server
- take - the number of numbers to send

Code Example:

```javascript
webSocket.send(JSON.stringify({
  type:'random_number',
  interval: 2000, // send a random number every two seconds (2000 milliseconds)
  take: 100, // send 100 numbers
}));
```



