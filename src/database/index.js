import mysql from "mysql";

export const query = () => {
  return {
    post: `INSERT INTO autor (nome,data_nascimento,tipo) 
          VALUES ("teste2", 19900101, "ROTEIRISTA");`,
    get: `SELECT * FROM marvel_db.autor;`,
    put: `UPDATE autor 
          SET nome = "teste alteracao"
          WHERE id_autor = 8 ;`,
    delete: `DELETE FROM autor 
            WHERE id_autor = 7;`
  };
};
