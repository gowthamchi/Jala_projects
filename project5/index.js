const express = require('express');
const client = require('prom-client');

const app = express();
const port = 8000;

// Prometheus metrics
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

const helloCounter = new client.Counter({
  name: 'hello_api_requests_total',
  help: 'Total number of /hello requests'
});

app.get('/', (req, res) => {
  res.send('Welcome to Node.js App with Prometheus Metrics');
});

app.get('/hello', (req, res) => {
  helloCounter.inc();
  res.send('Hello from Prometheus instrumented endpoint!');
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
