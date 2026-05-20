const express = require('express');
const { createProxyMiddleware } =
require('http-proxy-middleware');

const app = express();

app.get('/', (req, res) => {
    res.send("Gateway com Load Balancing");
});


// ==========================
// GAMES
// ==========================

let gameToggle = true;

app.use('/games', (req, res, next) => {

    const target = gameToggle
        ? 'http://localhost:3001'
        : 'http://localhost:3004';

    gameToggle = !gameToggle;

    createProxyMiddleware({
        target,
        changeOrigin: true
    })(req, res, next);

});


// ==========================
// REVIEWS
// ==========================

let reviewToggle = true;

app.use('/reviews', (req, res, next) => {

    const target = reviewToggle
        ? 'http://localhost:3002'
        : 'http://localhost:3005';

    reviewToggle = !reviewToggle;

    createProxyMiddleware({
        target,
        changeOrigin: true
    })(req, res, next);

});


// ==========================
// USERS
// ==========================

let userToggle = true;

app.use('/users', (req, res, next) => {

    const target = userToggle
        ? 'http://localhost:3003'
        : 'http://localhost:3006';

    userToggle = !userToggle;

    createProxyMiddleware({
        target,
        changeOrigin: true
    })(req, res, next);

});

app.listen(3000, () =>
    console.log("Gateway rodando na porta 3000")
);