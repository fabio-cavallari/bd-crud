export const validateStoryParams = body => {
  if (!body.img_url || !body.data_publicacao || !body.titulo) {
    const error = new Error("requisição incorreta");
    error.code = 400;
    throw error;
  }
};
