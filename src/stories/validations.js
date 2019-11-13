export const validateStoryPost = body => {
  if (!body.img_url || !body.data_publication || !body.titulo) {
    const error = new Error("requisição incorreta");
    error.code = 400;
    throw error;
  }
};

export const validateAuthorPost = body => {
  if (!body.nome || !body.data_nascimento || !body.tipo) {
    const error = new Error("requisição incorreta");
    error.code = 400;
    throw error;
  }
};

export const validateCharacterPost = body => {
  if (!body.nome || !body.data_aparicao || !body.codinome || !body.motivacao) {
    const error = new Error("requisição incorreta");
    error.code = 400;
    throw error;
  }
};
