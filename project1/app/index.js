const express = require('express');
const client = require('prom-client');
const app = express();

const register = new client.Registry();
client.collectDefaultMetrics({ register });

app.get('/metrics',async (req,res)=>{
  register.set('Content-type',register.contentType);
  register.end(await register.metrics());
});

app.get('/', (req, res) => {
  res.send('Default Prometheus metrics enabled.');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
