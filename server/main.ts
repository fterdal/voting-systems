import express, { Express, Request, Response } from "express";
import morgan from "morgan";

const app: Express = express();
app.use(morgan("dev"));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.get("/random", (req: Request, res: Response) => {
  const numbah = randomNumber().toString();
  console.log(`Random number generated: ${numbah}`);
  res.send(numbah);
});

function randomNumber() {
  return Math.floor(Math.random() * 1000);
}

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server listening for requests at http://localhost:${PORT}`);
});
