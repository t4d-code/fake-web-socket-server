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
npx run fake-web-socket-server
```

If you would like to run the server as part of you **npm** scripts configuration, thenm odify your **package.json** file by adding a new scripts entry.

```json
{
  "scripts":
    /* other entries */
    "fake-web-socket-server": "fake-web-socket-server"
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

