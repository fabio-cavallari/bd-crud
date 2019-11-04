import express from "express";
import setMiddlewares from "./src/middlewares";

const port = 5000;

const app = express();
setMiddlewares(app);

app.listen(port, () => {
  console.log("servidor rodando na porta ", port);
});
