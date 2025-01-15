import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

let userIsAuthorized = false;

const passwordCheck = (req, res, next) => {
  const password = req.body['password'];
  if (password === 'learnExpress') {
    userIsAuthorized = true;
  }
  next();
};

app.use(passwordCheck);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/check', (req, res) => {
  if (userIsAuthorized) {
    res.sendFile(__dirname + '/public/tips.html');
  } else {
    res.sendFile(__dirname + '/public/index.html');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
