import { query } from "./queries";
import mysql from "mysql";

const connectionConfig = {
  host: "marveldbdev.cbuvdhpkdqst.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "admin",
  password: "Ordep34280079!",
  database: "marvel_db"
};

const validateHasAuthorParams = body => {
  if (!body.historia_quadrinho_id_hq || !body.autor_id_autor) {
    const error = new Error("requisição incorreta");
    error.code = 400;
    throw error;
  }
};

export const postHasAuthor = async (req, res) => {
  console.log("postHasAuthor");
  try {
    const connection = mysql.createConnection(connectionConfig);
    validateHasAuthorParams(req.body);
    const { historia_quadrinho_id_hq, autor_id_autor } = req.body;

    let sqlQry = query().post;

    console.log("sqlQuery:", sqlQry);
    console.log("Runing query");

    await connection.query(
      sqlQry,
      [historia_quadrinho_id_hq, autor_id_autor],
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

export const getHasAuthors = async (req, res) => {
  console.log("getHasAuthors");
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

export const putHasAuthor = async (req, res) => {
  console.log("putHasAuthor");
  try {
    const connection = mysql.createConnection(connectionConfig);

    const idHq = parseInt(req.params.id_hq);
    const idAutor = parseInt(req.params.id_autor);

    validateHasAuthorParams(req.body);
    const { historia_quadrinho_id_hq, autor_id_autor } = req.body;

    const sqlQry = query().putById;

    console.log("sqlQuery:", sqlQry);
    console.log("Runing query");

    await connection.query(
      sqlQry,
      [historia_quadrinho_id_hq, autor_id_autor, idHq, idAutor],
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

export const deleteHasAuthor = async (req, res) => {
  console.log("deleteHasAuthor");
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
