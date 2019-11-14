export const query = () => {
  return {
    post: `INSERT INTO autor (nome, data_nascimento, tipo) 
      VALUES (?, ?, ?);`,
    get: `SELECT * FROM autor;`,
    getById: `SELECT * FROM autor WHERE id_autor = ?;`,
    putById: `UPDATE autor 
                SET nome=?, data_nascimento=?, tipo=?
                WHERE id_autor=?;`,
    deleteById: `DELETE FROM autor WHERE id_autor=?;`
  };
};
