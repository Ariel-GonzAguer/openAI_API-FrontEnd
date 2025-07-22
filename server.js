import express from "express";
import bodyParser from "body-parser";
import openaiRouter from "./api/openai.route.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

// Montar el router en /api
app.use("/api", openaiRouter);

app.get("/", (req, res) => {
  res.send("API de OpenAI funcionando");
});

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});
