export const query = () => {
  return {
    get: `SELECT hq.id_hq, hq.titulo, hq.data_publicacao, hq.img_url, a.id_autor, a.nome, a.data_nascimento, a.tipo,  p.id_pers, p.nome, p.data_aparicao, p.codinome, p.motivacao 
               FROM marvel_db.historia_quadrinho_has_autor hq_a, marvel_db.historia_quadrinho_has_personagem hq_p, marvel_db.historia_quadrinho hq, marvel_db.personagem p, marvel_db.autor a
               WHERE hq_p.historia_quadrinho_id_hq = hq.id_hq
               AND hq_p.personagem_id_pers = p.id_pers
               AND hq_a.historia_quadrinho_id_hq = hq.id_hq
               AND hq_a.autor_id_autor = a.id_autor
               ORDER BY hq_p.historia_quadrinho_id_hq;`
  };
};
