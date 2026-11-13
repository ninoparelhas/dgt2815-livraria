const express = require('express');
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const livros = await obterLivros();
    res.json(livros);
  } catch (erro) {
    res.status(500).json({ mensagem: 'Falha ao obter os livros', erro: erro.message });
  }
});

router.post('/', async (req, res) => {
  try {
    await incluir(req.body);
    res.json({ mensagem: 'Inclusão efetuada' });
  } catch (erro) {
    res.status(500).json({ mensagem: 'Falha na inclusão', erro: erro.message });
  }
});

router.delete('/:codigo', async (req, res) => {
  try {
    await excluir(req.params.codigo);
    res.json({ mensagem: 'Exclusão efetuada' });
  } catch (erro) {
    res.status(500).json({ mensagem: 'Falha na exclusão', erro: erro.message });
  }
});

module.exports = router;
