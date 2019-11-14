export const query = () => {
  return {
    post: `INSERT INTO historia_quadrinho_has_personagem (historia_quadrinho_id_hq, personagem_id_pers) 
             VALUES (?, ?);`,
    get: `SELECT hq.id_hq, hq.titulo, hq.data_publicacao, hq.img_url, p.id_pers, p.nome, p.data_aparicao, p.codinome, p.motivacao 
             FROM marvel_db.historia_quadrinho_has_personagem hq_p, marvel_db.historia_quadrinho hq, marvel_db.personagem p
             WHERE hq_p.historia_quadrinho_id_hq = hq.id_hq
             AND hq_p.personagem_id_pers = p.id_pers
             ORDER BY hq_p.historia_quadrinho_id_hq;`,
    putById: `UPDATE historia_quadrinho_has_personagem 
                SET historia_quadrinho_id_hq=?, personagem_id_pers=?
                WHERE historia_quadrinho_id_hq=? AND personagem_id_pers=?;`,
    deleteById: `DELETE FROM historia_quadrinho_has_personagem WHERE historia_quadrinho_id_hq=? AND personagem_id_pers=?;`
  };
};
