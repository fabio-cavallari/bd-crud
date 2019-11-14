export const query = () => {
  return {
    post: `INSERT INTO personagem (nome, data_aparicao, codinome, motivacao) 
    VALUES (?, ?, ?, ?);`,
    get: `SELECT * FROM personagem;`,
    getById: `SELECT * FROM personagem WHERE id_pers = ?;`,
    putById: `UPDATE personagem 
              SET nome=?, data_aparicao=?, codinome=?, motivacao=?
              WHERE id_pers=?;`,
    deleteById: `DELETE FROM personagem WHERE id_pers=?;`
  };
};
