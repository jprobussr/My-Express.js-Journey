import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

let exercisePeriod = '';


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const getFit = (req, res, next) => {
  console.log(req.body);
  exercisePeriod = req.body['exercise'] + ' ' + req.body['minutes'];
  next();
};

app.use(getFit);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/submit', (req, res) => {
    const times = Math.floor(Math.random() * 10 + 1);
  res.send(
    `<h1>Your exersise and time for completion is ${exercisePeriod} minutes ${times} times.</h1>`
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
