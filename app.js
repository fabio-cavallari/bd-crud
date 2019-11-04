import express from "express";
import setMiddlewares from "./src/middlewares";
import { connectWithDatabase, connection } from "./src/database/";

const port = 5000;

const app = express();
setMiddlewares(app);
connectWithDatabase(connection);

app.listen(port, () => {
  console.log("servidor rodando na porta ", port);
});
