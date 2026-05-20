const express = require('express');
const app = express();

app.use(express.json());

let users = [];

// GET
app.get('/users', (req, res) => {
    console.log("Resposta da Réplica User 3006");
    res.json(users);
});

// POST
app.post('/users', (req, res) => {

    const user = {
        id: users.length + 1,
        ...req.body
    };

    users.push(user);

    res.json(user);
});

app.listen(3006, () =>
    console.log("User Replica rodando na porta 3006")
);