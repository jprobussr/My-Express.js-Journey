import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const data = {
    title: 'Learn Express & EJS',
    seconds: new Date().getSeconds(),
    items: ['apple', 'grapes', 'blueberries'],
    htmlContent: '<strong>This is your call to never give up.</strong>',
  };
  res.render('index.ejs', data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
