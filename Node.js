const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.get("/find", async (req, res) => {
    const q = req.query.q;

    const r = await fetch("https://games.roblox.com/v1/games/list?keyword=" + encodeURIComponent(q));
    const data = await r.json();

    res.json(data);
});

app.listen(3000, () => console.log("Server running"));
