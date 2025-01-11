import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
let petName = '';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const petNameGenerator = (req, res, next) => {
  console.log(req.body);
  petName = req.body['state'] + ' ' + req.body['pet'];
  next();

};

app.use(petNameGenerator);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/submit', (req, res) => {
    res.send(`<h1>Your New Pet Name is: </h1> <h2> ${petName}🤣 </h2><p>How does that sound?</p>`);
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
