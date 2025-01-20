import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

const mockUsers = [
  { id: 22, userName: 'Jill', displayName: 'Jilly' },
  { id: 23, userName: 'Tim', displayName: 'Timmy' },
  { id: 24, userName: 'Anna', displayName: 'Annie' },
  { id: 25, userName: 'Mike', displayName: 'Mikey' },
  { id: 26, userName: 'Sara', displayName: 'Sarie' },
  { id: 27, userName: 'Rob', displayName: 'Robbie' },
  { id: 28, userName: 'Kate', displayName: 'Katie' },
  { id: 29, userName: 'Chris', displayName: 'Chrissy' },
];

const store = [
  { id: 122, product: 'Chicken', price: 3.04 },
  { id: 112, product: 'Shrimp', price: 13.99 },
  { id: 132, product: 'Apples', price: 5.98 },
];

app.get('/', (req, res) => {
  res.send({ message: 'hello.' });
});

app.get('/api/users', (req, res) => {
  res.send(mockUsers);
});

app.get('/api/users/:id', (req, res) => {
  console.log(req.params);
  const parsedId = parseInt(req.params.id);
  if (isNaN(parsedId))
    return res.status(400).send({ message: 'Bad request, invalid ID' });

  const findUser = mockUsers.find((user) => user.id === parsedId);
  if (!findUser) return res.sendStatus(404);
  return res.send(findUser);
});

app.get('/api/products', (req, res) => {
  res.send(store);
});

app.get('/api/products/:id', (req, res) => {
  console.log(req.params);
  const parsedId = parseInt(req.params.id);
  if (isNaN(parsedId))
    return res
      .status(400)
      .send({ message: 'Bad request, store item invalid.' });

  const findProduct = store.find((item) => item.id === parsedId);
  if (!findProduct) return res.sendStatus(404);
  return res.send(findProduct);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
