export const validateCharacterPost = body => {
  if (!body.nome || !body.data_aparicao || !body.codinome || !body.motivacao) {
    const error = new Error("requisição incorreta");
    error.code = 400;
    throw error;
  }
};
