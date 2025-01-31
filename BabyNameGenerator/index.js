import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 3000;
let babyName = '';

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const babyNameGenerator = (req, res, next) => {
  console.log(req.body);
  babyName = req.body['street'] + ' ' + req.body['pet'];
  next();
};

app.use(babyNameGenerator);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/submit', (req, res) => {
  res.send(`<h1>Your new baby name is ${babyName}.</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
