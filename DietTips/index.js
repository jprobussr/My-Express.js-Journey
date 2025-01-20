import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 3000;
let userIsAuthorized = false;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const passwordCheck = (req, res, next) => {
  const password = req.body['password'];
  if (password === 'diet') {
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
    res.sendFile(__dirname + '/public/diet.html');
  } else {
    res.sendFile(__dirname + '/public/index.html');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
