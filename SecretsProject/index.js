import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
const __dirname = dirname(fileURLToPath(import.meta.url));


app.use(express.static('public'));

// let userIsAuthorized = false;

const passwordCheck = (req, res, next) => {
  console.log(req.body);
  const password = req.body['password'];
  req.userIsAuthorized = password === 'codingGoals';
  next();
};

// app.use(passwordCheck);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/check', passwordCheck, (req, res) => {
  if (req.userIsAuthorized) {
    res.sendFile(__dirname + '/public/secrets.html');
  } else {
    res.sendFile(__dirname + '/public/index.html');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
