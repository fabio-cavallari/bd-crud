import { query } from "./queries";
import mysql from "mysql";

const connectionConfig = {
  host: "marveldbdev.cbuvdhpkdqst.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "admin",
  password: "Ordep34280079!",
  database: "marvel_db"
};

const validateAuthorParams = body => {
  if (!body.nome || !body.data_nascimento || !body.tipo) {
    const error = new Error("requisição incorreta");
    error.code = 400;
    throw error;
  }
};

export const postAuthor = async (req, res) => {
  console.log("postAuthor");
  try {
    const connection = mysql.createConnection(connectionConfig);

    validateAuthorParams(req.body);
    const { nome, data_nascimento, tipo } = req.body;

    let sqlQry = query().post;

    console.log("sqlQuery:", sqlQry);
    console.log("Runing query");

    await connection.query(
      sqlQry,
      [nome, data_nascimento, tipo],
      (err, result, fields) => {
        if (err) throw new Error(err);
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

export const getAuthors = async (req, res) => {
  console.log("getAuthors");
  try {
    const connection = mysql.createConnection(connectionConfig);

    const sqlQry = query().get;

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

export const getAuthorById = async (req, res) => {
  console.log("getAuthorById");
  try {
    const connection = mysql.createConnection(connectionConfig);

    const id = parseInt(req.params.id);

    const sqlQry = query().getById;

    console.log("sqlQuery:", sqlQry);
    console.log("Runing query");

    await connection.query(sqlQry, [id], (err, result, fields) => {
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

export const putAuthorById = async (req, res) => {
  console.log("putAuthor");
  try {
    const connection = mysql.createConnection(connectionConfig);

    const id = parseInt(req.params.id);

    validateAuthorParams(req.body);
    const { nome, data_nascimento, tipo } = req.body;

    const sqlQry = query().putById;

    console.log("sqlQuery:", sqlQry);
    console.log("Runing query");

    await connection.query(
      sqlQry,
      [nome, data_nascimento, tipo, id],
      (err, result, fields) => {
        if (err) throw new Error(err);
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

export const deleteAuthorById = async (req, res) => {
  console.log("deleteAuthor");
  try {
    const connection = mysql.createConnection(connectionConfig);

    const id = parseInt(req.params.id);
    console.log("id", id);
    const sqlQry = query().deleteById;

    console.log("sqlQuery:", sqlQry);
    console.log("Runing query");

    await connection.query(sqlQry, [id], (err, result, fields) => {
      if (err) throw new Error(err);
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
