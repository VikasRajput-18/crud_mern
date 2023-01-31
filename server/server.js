import express from "express";
import { config } from "dotenv";
import cors from "cors";
import notes from "./data/notes.js";
import connection from "./config/config.js";
config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.get("/api/notes", (req, res) => {
  res.send(notes);
});

connection();

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((item) => item._id === req.params.id);
  console.log(note);
  res.send(note);
});

app.listen(PORT, () => {
  console.log(`Server is listening on htpp://localhost:${PORT}`);
});
