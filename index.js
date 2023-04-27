const express = require('express');
const app = express();
const port = 3000; //you can custom your port

const backdoorList = require('./list.json');

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.get('/upload', (req, res) => {
  const { path, ip } = req.query;

  const dateTime = new Date().toISOString();

  const fs = require('fs');
  const fileContent = fs.readFileSync(path, 'utf8');
  const isBackdoor = backdoorList.some(({ backdoorRegex }) => {
    const regex = new RegExp(backdoorRegex, 'gm');
    return regex.test(fileContent);
  });


  if (isBackdoor) {
    console.log(`File diunggah oleh ${ip} ke ${path} pada ${dateTime} dan terdeteksi backdoor`);
    res.send(`File diunggah oleh ${ip} ke ${path} pada ${dateTime}<br>Backdoor: true`); //you can delete this
  } else {
    console.log(`File diunggah oleh ${ip} ke ${path} pada ${dateTime} dan tidak terdeteksi backdoor`);
    res.send(`File diunggah oleh ${ip} ke ${path} pada ${dateTime}<br>Backdoor: false`); //you can delete this
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
