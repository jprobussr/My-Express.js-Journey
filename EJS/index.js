import express from 'express';
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  const today = new Date();
  const day = today.getDay();

  let type = 'a weekday';
  let adv = 'keep pushing.';

  if (day === 0 || day === 6) {
    type = 'a weekend';
    adv = 'time to code harder. Never Give Up!';
  }

  res.render('index.ejs', {
    advice: adv,
    dayType: type,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//   const today = new Date();
//   const day = today.getDay();

//   let type = '';
//   let adv = '';
//   let name = 'Ghost'

//   switch (day) {
//     case 0:
//       type = "It's Sunday Funday!";
//       adv = 'Code, recharge, and plan for the week ahead';
//       break;
//     case 6:
//       type = "It's Super Saturday!";
//       adv = 'Time to tackle a coding project or learn something new.';
//       break;
//     default:
//       type = "It's the weekday coding hustle. Never give up!";
//       adv = 'Stay focused, code hard, and crush your goals. You got this.';
//       break;
//   }

//   res.render('index', {dayType: type, advice: adv, name: name});
// });
