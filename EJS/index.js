import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const data = {
    title: 'Train The Pain',
    seconds: new Date().getSeconds(),
    items: ['Push-ups', 'Sit-ups', 'Shush-up'],
    htmlContent: '<strong>Believe in yourself!!</strong>',
  };
  res.render('index.ejs', data);
});

// let bowl = ['Apples', 'Bananas', 'Grapes', 'Pears'];

// app.get('/', (req, res) => {
//   res.render('index.ejs', { fruits: bowl });
// });

app.listen(port, (req, res) => {
  console.log(`Server is listening on port ${port}.`);
});

// import express from 'express';

// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   const today = new Date();
//   let day = today.getDay();

//   //console.log(day)
//   let type = 'a weekday';
//   let adv = "it's time to work hard.";
//   let name = 'Ghost';

//   if (day === 0 || day === 6) {
//     type = 'The weekend';
//     adv = "it's time to have some more practice";
//   }

//   res.render('index.ejs', {
//     dayType: type,
//     advice: adv,
//     name,
//   });
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}.`);
// });
