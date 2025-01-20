import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 3000;
let bandName = '';

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const bandNameGenerator = (req, res, next) => {
  console.log(req.body);
  bandName = req.body['street'] + ' ' + req.body['pet'];
  next();
};

app.use(bandNameGenerator);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/submit', (req, res) => {
  res.send(`
    <h1>Your band name is: </h1>
    <h2>${bandName}</h2>`);
});

app.listen(PORT, (req, res) => {
  console.log(`Server is runnin on port ${PORT}.`);
});
