import { query } from "../../database/index";
import mysql from "mysql";
import { validateCharacterPost } from "./validatiions";

const connectionConfig = {
  host: "marveldbdev.cbuvdhpkdqst.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "admin",
  password: "Ordep34280079!",
  database: "marvel_db"
};

export const postCharacter = async (req, res) => {
  console.log("postCharacter");
  try {
    const connection = mysql.createConnection(connectionConfig);

    validateCharacterPost(req.body);
    const { nome, data_aparicao, codinome, motivacao } = req.body;

    let sqlQry = query().post.character;

    sqlQry = sqlQry.replace("<NOME>", nome);
    sqlQry = sqlQry.replace("<DATA_APARICAO>", parseInt(data_aparicao));
    sqlQry = sqlQry.replace("<TICODINOMNEPO>", codinome);
    sqlQry = sqlQry.replace("<MOTIVACAO>", motivacao);

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
