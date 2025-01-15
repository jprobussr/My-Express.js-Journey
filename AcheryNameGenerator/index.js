import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
let archeryName = '';

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const archerNameGenerator = (req, res, next) => {
  console.log(req.body);
  archeryName = req.body['school'] + " " + req.body['animal'];
  next();
};

app.use(archerNameGenerator);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/submit', (req, res) => {
  res.send(`Your new archery name for your school is ${archeryName}.`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
