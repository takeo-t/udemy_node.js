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

// お客様情報の更新
app.put("/api/customers/:id", (req, res) => {
    const customer = customers.find((c) => c.id === parseInt(req.params.id));
    customer.title = req.body.title;
    res.send(customer);
});

// お客様情報の削除
app.delete("/api/customers/:id", (req, res) => {
    const customer = customers.find((c) => c.id === parseInt(req.params.id));

    const index = customers.indexOf(customer);
    customers.splice(index, 1);

    res.send(customer);
});