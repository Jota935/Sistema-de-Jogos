const express = require('express');
const app = express();

app.use(express.json());

let reviews = [];

// GET
app.get('/reviews', (req, res) => {
    console.log("Resposta do Review Service 3002");
    res.json(reviews);
});

// POST
app.post('/reviews', (req, res) => {
    const review = {
        id: reviews.length + 1,
        ...req.body
    };

    reviews.push(review);

    res.json(review);
});

app.listen(3002, () =>
    console.log("Review Service rodando na porta 3002")
);