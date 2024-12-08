const express = require('express');
const app = express();
const PORT = 5000;
app.use(express.json());

app.listen(PORT, () => console.log(`サーバーが起動しました！`));

app.get("/", (req, res) => {
    res.send("Udemy講座を受講中")
});

const customers = [
    {title: "田中さん", id: 1},
    {title: "山田さん", id: 2},
    {title: "佐藤さん", id: 3},
    {title: "鈴木さん", id: 4},
    {title: "斎藤さん", id: 5},
]

app.get("/api/customers", (req, res) => {
    res.send(customers);
});

app.post("/api/customers", (req, res) => {
    const customer = {
        title: req.body.title,
        id: customers.length + 1
    };
    customers.push(customer);
    res.send(customer);
});