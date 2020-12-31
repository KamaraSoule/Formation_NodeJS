// console.log('Bonjour Soulé');

// function add(v1, v2) {
//     return v1 + v2;
// }
// let resultat = add(5, 5);
// console.log('Résultat = ' + resultat);

// const fs = require('fs');

// const data = fs.readdirSync('./');
// const fileData = fs.readFileSync(data[0], 'utf8');
// console.log(fileData);

// const http = require('http');
// let passage = 0;
// const server = http.createServer((req, res) => {
//     // console.log('Passage ' + (++passage));
//     // console.log(req.path);
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.write('{ status: "OK" }');
//     res.end();
// });
// server.on('clientError', (err, socket) => {
//   socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
// });
// const port = 8000;
// server.listen(port, function() {
//   console.log('Server stared in port ' + port);
// });

const express = require('express');
const app = express();

app.get('/soule', function (req, res) {
  const data = [
    {
      name: 'soule'
    },
    {
      name: 'idrissa'
    }
  ];
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(data));
  res.end();
});

app.get('/idrissa', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send('{ status: "KO" }');
  res.end();
});

app.on('error', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

const port = 8000;
app.listen(port, () => {
  console.log('Server stared in port ' + port);
});