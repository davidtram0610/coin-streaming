# A streaming microservice to handle streaming data from CoinBase

### Requirements

```
node, npm, docker
```

### Initialization to start server

```
docker build -t nodeapp .
```

```
docker-compose up
```

### Issues

```
Server will crash upon user's disconnect event because the server cannot detect the close event and continue sending messages to client after the connection is terminated
Err: WebSocket is not open: readyState 3 (CLOSED)
```

```
Deploying the project with Jenkin
```
