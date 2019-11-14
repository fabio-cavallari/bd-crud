export const query = () => {
  return {
    post: `INSERT INTO historia_quadrinho_has_autor (historia_quadrinho_id_hq, autor_id_autor) 
           VALUES (?, ?);`,
    get: `SELECT hq.id_hq, hq.titulo, hq.data_publicacao, hq.img_url, a.id_autor, a.nome, a.data_nascimento, a.tipo 
        FROM marvel_db.historia_quadrinho_has_autor hq_a, marvel_db.historia_quadrinho hq, marvel_db.autor a
        WHERE hq_a.historia_quadrinho_id_hq = hq.id_hq
        AND hq_a.autor_id_autor = a.id_autor
        ORDER BY hq_a.historia_quadrinho_id_hq;`,
    putById: `UPDATE historia_quadrinho_has_autor 
              SET historia_quadrinho_id_hq=?, autor_id_autor=?
              WHERE historia_quadrinho_id_hq=? AND autor_id_autor=?;`,
    deleteById: `DELETE FROM historia_quadrinho_has_autor WHERE historia_quadrinho_id_hq=? AND autor_id_autor=?;`
  };
};
