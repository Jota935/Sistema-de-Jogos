const express = require('express');
const app = express();

app.use(express.json());

let games = [];

// GET
app.get('/games', (req, res) => {
    console.log("Resposta do Game Service 3001");
    res.json(games);
});

// POST
app.post('/games', (req, res) => {
    const game = { id: games.length + 1, ...req.body };
    games.push(game);
    res.json(game);
});

// PUT
app.put('/games/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const game = games.find(g => g.id === id);

    if (!game) {
        return res.status(404).json({
            message: "Jogo não encontrado"
        });
    }

    game.name = req.body.name || game.name;
    game.genre = req.body.genre || game.genre;

    res.json(game);
});

// DELETE
app.delete('/games/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const index = games.findIndex(g => g.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Jogo não encontrado"
        });
    }

    const deleted = games.splice(index, 1);

    res.json(deleted);
});

app.listen(3001, () =>
    console.log("Game Service rodando na porta 3001")
);