// server.js
const express = require('express');
const path    = require('path');

const app  = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist/ui')));

app.get('*', (_req, res) =>
  res.sendFile(path.join(__dirname, 'dist/ui/index.html'))
);

app.listen(port, () =>
  console.log(`Angular uygulaması http://localhost:${port} adresinde çalışıyor`)
);
