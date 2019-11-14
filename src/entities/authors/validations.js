export const validateAuthorPost = body => {
  if (!body.nome || !body.data_nascimento || !body.tipo) {
    const error = new Error("requisição incorreta");
    error.code = 400;
    throw error;
  }
};
