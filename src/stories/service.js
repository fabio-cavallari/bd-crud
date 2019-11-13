import { query } from "../database/index";
import mysql from "mysql";
import {
  validateStoryPost,
  validateAuthorPost,
  validateCharacterPost
} from "./validations";

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
