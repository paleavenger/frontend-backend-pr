const express = require('express');
const app = express();
const port = 3000;

let goods = [
    {id: 1, name: 'Колбаса', price: 30},
    {id: 2, name: 'Хлеб', price: 20},
    {id: 3, name: 'Сыр', price: 21}
];

app.use(express.json());

//GET
app.get('/', (req, res) => {
    res.send(goods);
});

//POST
app.post('/goods', (req, res) => {
    const {name, price} = req.body;

    const newUser = {
        id: Date.now(),
        name,
        price
    }

    goods.push(newUser);
    res.status(201).json(newUser);
});

//GET
app.get('/goods', (req, res) => {
    res.send(JSON.stringify(goods));
});

//GET по id
app.get('/goods/:id', (req, res) => {
    let item = goods.find(u => u.id == req.params.id);
    res.send(JSON.stringify(item));
});

//PATCH
app.patch('/goods/:id', (req, res) => {
    const item = goods.find(u => u.id == req.params.id);
    const { name, price } = req.body;

    if (name !== undefined) item.name = name;
    if (price !== undefined) item.price = price;

    res.json(item);
});

//DELETE
app.delete('/goods/:id', (req, res) => {
    goods = goods.filter(u => u.id != req.params.id);
    res.send('Ok');
});

//ЗАПУСК
app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});