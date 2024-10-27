import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.tsx';

const app = express();
const port = 9000;

app.use(express.static('dist/public'));

app.get('*', (_req, res) => {
  const appContent = renderToString(<App />);

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>SSR React App</title>
    </head>
    <body>
      <div id="root">${appContent}</div>
      <script src="/client.js"></script>
    </body>
    </html>
  `;

  res.send(html);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});