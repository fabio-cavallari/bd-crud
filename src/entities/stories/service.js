import { query } from "../../database/index";
import mysql from "mysql";
import { validateStoryPost } from "./validations";

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

    validateStoryPost(req.body);
    const { img_url, data_publicacao, titulo } = req.body;

    let sqlQry = query().post.story;

    sqlQry = sqlQry.replace("<IMG_URL>", img_url);
    sqlQry = sqlQry.replace("<DATA>", parseInt(data_publicacao));
    sqlQry = sqlQry.replace("<TITULO>", titulo);

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
    res.status(400).send({ sucess: false, message: error.message });
  }
};

export const putStories = async (req, res) => {
  console.log("putStories");
  try {
    const connection = mysql.createConnection(connectionConfig);

    const sqlQry = query().put;
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
    res.status(400).send({ sucess: false, message: error.message });
  }
};

export const deleteStories = async (req, res) => {
  console.log("deleteStories");
  try {
    const connection = mysql.createConnection(connectionConfig);

    const sqlQry = query().delete;
    console.log("sqlQuery:", sqlQry);
    console.log("Runing query");

    await connection.query(sqlQry, (err, result, fields) => {
      if (err) throw new Error(err);
      postStories;
      console.log(result);
      console.log("Connection end");
      res.status(200).send({ sucess: true, result: result });
    });
    connection.end();
  } catch (error) {
    res.status(400).send({ sucess: false, message: error.message });
  }
};
