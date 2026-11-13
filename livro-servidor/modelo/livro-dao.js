const Livro = require('./livro-schema');

const obterLivros = async () => {
  return await Livro.find();
};

const incluir = async (livro) => {
  // o front manda _id null no livro novo, tirando o campo o mongoose gera o id
  if (!livro._id) {
    delete livro._id;
  }
  return await Livro.create(livro);
};

const excluir = async (codigo) => {
  return await Livro.deleteOne({ _id: codigo });
};

module.exports = { obterLivros, incluir, excluir };
