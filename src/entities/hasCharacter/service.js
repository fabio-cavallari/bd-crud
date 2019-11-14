import { query } from "./queries";
import mysql from "mysql";

const connectionConfig = {
  host: "marveldbdev.cbuvdhpkdqst.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "admin",
  password: "Ordep34280079!",
  database: "marvel_db"
};

const validateHasCharacterParams = body => {
  if (!body.historia_quadrinho_id_hq || !body.personagem_id_pers) {
    const error = new Error("requisição incorreta");
    error.code = 400;
    throw error;
  }
};

export const postHasCharacter = async (req, res) => {
  console.log("postHasCharacter");
  try {
    const connection = mysql.createConnection(connectionConfig);
    validateHasCharacterParams(req.body);
    const { historia_quadrinho_id_hq, personagem_id_pers } = req.body;

    let sqlQry = query().post;

    console.log("sqlQuery:", sqlQry);
    console.log("Runing query");

    await connection.query(
      sqlQry,
      [historia_quadrinho_id_hq, personagem_id_pers],
      (err, result, fields) => {
        if (err) {
          console.log(err);
          res.status(500).send({ sucess: false, message: err.sqlMessage });
          connection.end();
          return;
        }
        console.log(result);
        console.log("Connection end");
        res.status(200).send({ sucess: true, result: result });
      }
    );
    connection.end();
  } catch (error) {
    res.status(error.code).send({ sucess: false, message: error.message });
  }
};

export const getHasCharacters = async (req, res) => {
  console.log("getHasCharacters");
  try {
    const connection = mysql.createConnection(connectionConfig);

    const sqlQry = query().get;

    console.log("sqlQuery:", sqlQry);
    console.log("Runing query");

    await connection.query(sqlQry, (err, result, fields) => {
      if (err) {
        console.log(err);
        res.status(500).send({ sucess: false, message: err.sqlMessage });
        connection.end();
        return;
      }
      console.log(result);
      console.log("Connection end");
      res.status(200).send({ sucess: true, result: result });
    });
    connection.end();
  } catch (error) {
    res.status(error.code).send({ sucess: false, message: error.message });
  }
};

export const putHasCharacter = async (req, res) => {
  console.log("putHasCharacter");
  try {
    const connection = mysql.createConnection(connectionConfig);

    const idHq = parseInt(req.params.id_hq);
    const idAutor = parseInt(req.params.id_autor);

    validateHasCharacterParams(req.body);
    const { historia_quadrinho_id_hq, personagem_id_pers } = req.body;

    const sqlQry = query().putById;

    console.log("sqlQuery:", sqlQry);
    console.log("Runing query");

    await connection.query(
      sqlQry,
      [historia_quadrinho_id_hq, personagem_id_pers, idHq, idAutor],
      (err, result, fields) => {
        if (err) {
          console.log(err);
          res.status(500).send({ sucess: false, message: err.sqlMessage });
          connection.end();
          return;
        }
        console.log(result);
        console.log("Connection end");
        res.status(200).send({ sucess: true, result: result });
      }
    );
    connection.end();
  } catch (error) {
    res
      .status(error.code || 500)
      .send({ sucess: false, message: error.message });
  }
};

export const deleteHasCharacter = async (req, res) => {
  console.log("deleteHasCharacter");
  try {
    const connection = mysql.createConnection(connectionConfig);

    const idHq = parseInt(req.params.id_hq);
    const idAutor = parseInt(req.params.id_autor);

    const sqlQry = query().deleteById;

    console.log("sqlQuery:", sqlQry);
    console.log("Runing query");

    await connection.query(sqlQry, [idHq, idAutor], (err, result, fields) => {
      if (err) {
        console.log(err);
        res.status(500).send({ sucess: false, message: err.sqlMessage });
        connection.end();
        return;
      }
      console.log(result);
      console.log("Connection end");
      res.status(200).send({ sucess: true, result: result });
    });
    connection.end();
  } catch (error) {
    res
      .status(error.code || 500)
      .send({ sucess: false, message: error.message });
  }
};
