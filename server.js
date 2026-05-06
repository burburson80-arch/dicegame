const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/roll", (_req, res) => {
  const player = Math.floor(Math.random() * 6) + 1;
  const api = Math.floor(Math.random() * 6) + 1;

  let winner = "Ничья";
  if (player > api) winner = "Игрок";
  if (api > player) winner = "API";

  res.json({ player, api, winner });
});

app.listen(PORT, () => {
  console.log(`Dice API started on http://localhost:${PORT}`);
});
