import { query } from "./queries";
import mysql from "mysql";

const connectionConfig = {
  host: "marveldbdev.cbuvdhpkdqst.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "admin",
  password: "Ordep34280079!",
  database: "marvel_db"
};

const validateCharacterParams = body => {
  if (!body.nome || !body.data_aparicao || !body.codinome || !body.motivacao) {
    const error = new Error("requisição incorreta");
    error.code = 400;
    throw error;
  }
};

export const postCharacter = async (req, res) => {
  console.log("postCharacter");
  try {
    const connection = mysql.createConnection(connectionConfig);

    validateCharacterParams(req.body);
    const { nome, data_aparicao, codinome, motivacao } = req.body;

    const sqlQry = query().post;

    console.log("sqlQuery:", sqlQry);
    console.log("Runing query");

    await connection.query(
      sqlQry,
      [nome, data_aparicao, codinome, motivacao],
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

export const getCharacters = async (req, res) => {
  console.log("getCharactes");
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

export const getCharacterById = async (req, res) => {
  console.log("getCharactes");
  try {
    const connection = mysql.createConnection(connectionConfig);

    const id = parseInt(req.params.id);

    const sqlQry = query().getById;

    console.log("sqlQuery:", sqlQry);
    console.log("Runing query");

    await connection.query(sqlQry, [id], (err, result, fields) => {
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

export const putCharacterById = async (req, res) => {
  console.log("putSCharacter");
  try {
    const connection = mysql.createConnection(connectionConfig);

    const id = parseInt(req.params.id);

    validateCharacterParams(req.body);
    const { nome, data_aparicao, codinome, motivacao } = req.body;

    const sqlQry = query().putById;

    console.log("sqlQuery:", sqlQry);
    console.log("Runing query");

    await connection.query(
      sqlQry,
      [nome, data_aparicao, codinome, motivacao, id],
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

export const deleteCharacterById = async (req, res) => {
  console.log("deleteCharacter");
  try {
    const connection = mysql.createConnection(connectionConfig);

    const id = parseInt(req.params.id);
    console.log("id", id);
    const sqlQry = query().deleteById;

    console.log("sqlQuery:", sqlQry);
    console.log("Runing query");

    await connection.query(sqlQry, [id], (err, result, fields) => {
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
