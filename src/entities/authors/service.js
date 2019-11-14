import { query } from "../../database/index";
import mysql from "mysql";
import { validateAuthorPost } from "./validations";

const connectionConfig = {
  host: "marveldbdev.cbuvdhpkdqst.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "admin",
  password: "Ordep34280079!",
  database: "marvel_db"
};

export const postAuthor = async (req, res) => {
  console.log("postAuthor");
  try {
    const connection = mysql.createConnection(connectionConfig);

    validateAuthorPost(req.body);
    const { nome, data_nascimento, tipo } = req.body;

    let sqlQry = query().post.author;

    sqlQry = sqlQry.replace("<NOME>", nome);
    sqlQry = sqlQry.replace("<DATA_NASCIMENTO>", parseInt(data_nascimento));
    sqlQry = sqlQry.replace("<TIPO>", tipo);

    console.log("sqlQuery:", sqlQry);
    console.log("Runing query");

    await connection.query(sqlQry, (err, result, fields) => {
      if (err) throw new Error(err);
      console.log(result);
      console.log("Connection end");
      res.status(200).send({ sucess: true, result: result });
    });
    connection.end();
  } catch (error) {
    res.status(error.code).send({ sucess: false, message: error.message });
  }
};
