const express = require('express');
const app = express();

app.use(express.json());

let games = [
    {id : 1, name: "Spec Ops: The Line", genre: "Third-Person Shooter"},
    {id : 2, name: "The Witcher 3: Wild Hunt", genre: "Action RPG"},
    {id : 3, name: "Portal 2", genre: "Puzzle-Platformer"}
];

let reviews = [
    {id : 1, gameId: 1, review: "A gripping narrative with intense gameplay."},
    {id : 2, gameId: 2, review: "An expansive world with rich storytelling."},
    {id : 3, gameId: 3, review: "Innovative puzzles and witty writing."}
];

let users = [
    {id: 1, name: "Jarny"},
    {id: 2, name: "Admin"},
    {id: 3, name: "Guest"}
];

app.get('/games', (req, res) => res.json(games));
app.post('/games', (req, res) => {
    const game = {id: games.length + 1, ...req.body};
    games.push(game);
    res.json(game);
});

app.get('/reviews', (req, res) => res.json(reviews));
app.post('/reviews', (req, res) => {
    const review = {id: reviews.length + 1, ...req.body};
    reviews.push(review);
    res.json(review);
});


app.get('/users', (req, res) => res.json(users));
app.post('/users', (req, res) => {
    const user = {id: users.length + 1, ...req.body};
    users.push(user);
    res.json(user);
});

app.listen(4000, () => console.log('Monolito rodando na porta 4000'));