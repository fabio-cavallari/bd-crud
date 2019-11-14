export const query = () => {
  return {
    post: `INSERT INTO historia_quadrinho (img_url, data_publicacao, titulo) 
            VALUES (?, ?, ?);`,
    get: `SELECT * FROM historia_quadrinho;`,
    getById: `SELECT * FROM historia_quadrinho WHERE id_hq = ?;`,
    putById: `UPDATE historia_quadrinho 
              SET img_url=?, data_publicacao=?, titulo=?
              WHERE id_hq=?;`,
    deleteById: `DELETE FROM historia_quadrinho WHERE id_hq=?;`
  };
};
