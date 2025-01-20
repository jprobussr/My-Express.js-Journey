import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
let songName = '';
const name = 'Ghost';

app.use(express.urlencoded({ extended: true }));

const songNameGenerator = (req, res, next) => {
    console.log(req.body);
    songName = req.body['season'] + ' ' + req.body['weather'];
    next();
}

app.use(songNameGenerator);

app.get('/', (req, res) => {
    res.sendFile(__dirname + ('/public/index.html'));
});

app.post('/submit', (req, res) => {
    res.send(`<h1>Hi ${name}. Your new song name is ${songName}.`);
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
