export const query = () => {
  return {
    post: {
      story: `INSERT INTO historia_quadrinho (img_url, data_publicacao, titulo) 
          VALUES ("<IMG_URL>", <DATA>, "<TITULO>");`,
      author: `INSERT INTO autor (nome, data_nascimento, tipo) 
          VALUES ("<NOME>", <DATA_NASCIMENTO>, "<TIPO>");`,
      character: `INSERT INTO personagem (nome, data_aparicao, codinome, motivacao) 
          VALUES ("<NOME>", <DATA_APARICAO>", "<CODINOMNE>", "<MOTIVACAO>");`
    },
    get: `SELECT * FROM marvel_db.autor;`,
    put: `UPDATE autor 
          SET nome = "teste alteracao"
          WHERE id_autor = 8 ;`,
    delete: `DELETE FROM autor 
            WHERE id_autor = 7;`
  };
};
