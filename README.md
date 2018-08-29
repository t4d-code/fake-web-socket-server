# Fake Web Socket Server

Get a web socket server which generates fake data in 30 seconds or less.

## Install the Server

To add the fake web socket server to your application, run the following command in a terminal window within your project's top-level folder (where package.json lives)

```
npm install -D -E fake-web-socket-server
```

This command will install and register the fake web socket server as a development dependency (not poluting your production releases). Also, the version number will be fixed to prevent against future upgrades from breaking your code.

## Run the Server

Modify your package.json by adding a new scripts entry.

```
{
  "scripts":
    /* other entries */
    "fake-web-socket-server": "fake-web-socket-server"
}
```

From a terminal window within your project's top-level folder run the following command:

```
npm run fake-web-socket-server
```

## Server Options

--port, -p - set the port number, the default port is 8080

