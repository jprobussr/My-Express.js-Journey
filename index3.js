import express from 'express';

const app = express();
const port = 3000;

const logger = (req, res, next) => {
    console.log('Request Method: ', req.method);
    console.log('Request URL: ', req.url);
    next();
}

app.use(logger);

app.get('/', (req, res, next) => {
  res.send('hello');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
