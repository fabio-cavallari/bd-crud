export const validateStoryPost = body => {
  if (!body.img_url || !body.data_publication || !body.titulo) {
    const error = new Error("requisição incorreta");
    error.code = 400;
    throw error;
  }
};
