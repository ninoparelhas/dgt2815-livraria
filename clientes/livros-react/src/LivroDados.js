import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ControleLivros from './controle/ControleLivros';
import ControleEditora from './controle/ControleEditora';
import Livro from './model/Livro';

const controleLivro = new ControleLivros();
const controleEditora = new ControleEditora();

const LivroDados = () => {
  const opcoes = controleEditora.getEditoras().map((editora) => ({
    value: editora.codEditora,
    text: editora.nome
  }));

  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(opcoes[0].value);
  const navigate = useNavigate();

  const tratarCombo = (evento) => {
    setCodEditora(Number(evento.target.value));
  };

  const incluir = (evento) => {
    evento.preventDefault();
    const livro = new Livro(
      '',
      codEditora,
      titulo,
      resumo,
      autores.split('\n').map((autor) => autor.trim()).filter((autor) => autor)
    );
    controleLivro.incluir(livro).then(() => navigate('/'));
  };

  return (
    <main className="container">
      <h1>Dados do Livro</h1>
      <form onSubmit={incluir}>
        <div className="mb-3">
          <label className="form-label" htmlFor="titulo">Título</label>
          <input id="titulo" className="form-control" value={titulo}
            onChange={(e) => setTitulo(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="resumo">Resumo</label>
          <textarea id="resumo" className="form-control" rows="3" value={resumo}
            onChange={(e) => setResumo(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="editora">Editora</label>
          <select id="editora" className="form-select" value={codEditora} onChange={tratarCombo}>
            {opcoes.map((opcao) => (
              <option key={opcao.value} value={opcao.value}>{opcao.text}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="autores">Autores (1 por linha)</label>
          <textarea id="autores" className="form-control" rows="3" value={autores}
            onChange={(e) => setAutores(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Salvar Dados</button>
      </form>
    </main>
  );
};

export default LivroDados;
