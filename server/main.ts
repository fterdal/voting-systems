import express, { Express, Request, Response } from "express";
import { query } from "./db/db";

import cors from "cors";
import morgan from "morgan";

const app: Express = express();

app.use(morgan("dev"));
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.get("/random", (req: Request, res: Response) => {
  const numbah = randomNumber().toString();
  console.log(`Random number generated: ${numbah}`);
  res.send(numbah);
});

app.get("/ballot", async (req, res) => {
  const ballots = await query("SELECT * FROM ballots;");
  res.send(ballots);
});

app.post("/ballot", async (req, res) => {
  const ballot = await query("INSERT INTO ballots DEFAULT VALUES");
  res.send(ballot);
});

function randomNumber() {
  return Math.floor(Math.random() * 1000);
}

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server listening for requests at http://localhost:${PORT}`);
});
