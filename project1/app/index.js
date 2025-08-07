const express = require('express');
const client = require('prom-client');

const app = express();
const port = 3000;

const register = new client.Registry();
client.collectDefaultMetrics({ register });

app.get('/metrics', async (req, res) => {
  res.setHeader('Content-Type', register.contentType);
  res.end(await register.metrics());
});


app.get('/', (req, res) => {
  res.send('Default Prometheus metrics enabled.');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
