import { executeQuery } from "../database/index";

export const getStories = async (req, res) => {
  console.log("getstories");
  executeQuery("SELECT * FROM marvel_db.autor;");
  res.status(200).send("");
};
