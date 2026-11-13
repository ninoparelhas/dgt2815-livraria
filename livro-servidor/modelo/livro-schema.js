const banco = require('./conexao');

const LivroSchema = new banco.Schema({
  // auto: true -> o mongoose gera o ObjectId quando o livro vem sem _id
  _id: { type: banco.Schema.Types.ObjectId, auto: true },
  titulo: String,
  codEditora: Number,
  resumo: String,
  autores: [String]
});

const Livro = banco.model('Livro', LivroSchema, 'livros');

module.exports = Livro;
