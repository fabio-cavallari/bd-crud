import { query } from "./queries";
import mysql from "mysql";
import { validateStoryParams } from "./validations";

const connectionConfig = {
  host: "marveldbdev.cbuvdhpkdqst.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "admin",
  password: "Ordep34280079!",
  database: "marvel_db"
};

export const postStory = async (req, res) => {
  console.log("poststories");
  try {
    const connection = mysql.createConnection(connectionConfig);

    validateStoryParams(req.body);
    const { img_url, data_publicacao, titulo } = req.body;

    const sqlQry = query().post;

    console.log("sqlQuery:", sqlQry);
    console.log("Runing query");

    await connection.query(
      sqlQry,
      [img_url, data_publicacao, titulo],
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

export const getStories = async (req, res) => {
  console.log("getstories");
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
    res
      .status(error.code || 500)
      .send({ sucess: false, message: error.message });
  }
};

export const getStoryById = async (req, res) => {
  console.log("getstories");
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
    res
      .status(error.code || 500)
      .send({ sucess: false, message: error.message });
  }
};

export const putStoryById = async (req, res) => {
  console.log("putStories");
  try {
    const connection = mysql.createConnection(connectionConfig);

    const id = parseInt(req.params.id);

    validateStoryParams(req.body);
    const { img_url, data_publicacao, titulo } = req.body;
    const sqlQry = query().putById;

    console.log("sqlQuery:", sqlQry);
    console.log("Runing query");

    await connection.query(
      sqlQry,
      [img_url, parseInt(data_publicacao), titulo, id],
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

export const deleteStoryById = async (req, res) => {
  console.log("deleteStories");
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
