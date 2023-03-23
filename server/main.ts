import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server listening for requests at http://localhost:${PORT}`);
});
