import type { NextPage } from 'next';
import Head from 'next/head';
import Router from 'next/router';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import { Menu } from '../componentes/Menu';
import Livro from '../classes/model/Livro';
import ControleEditora from '../classes/controle/ControleEditora';
import ControleLivros from '../classes/controle/ControleLivros';

const controleEditora = new ControleEditora();
const controleLivros = new ControleLivros();

const LivroDados: NextPage = () => {
  const opcoes = controleEditora.getEditoras().map((editora) => ({
    value: editora.codEditora,
    text: editora.nome
  }));

  const [titulo, setTitulo] = useState<string>('');
  const [resumo, setResumo] = useState<string>('');
  const [autores, setAutores] = useState<string>('');
  const [codEditora, setCodEditora] = useState<number>(opcoes[0].value);

  const tratarCombo = (evento: React.ChangeEvent<HTMLSelectElement>) => {
    setCodEditora(Number(evento.target.value));
  };

  const incluir = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    const livro = new Livro(
      '',
      codEditora,
      titulo,
      resumo,
      autores.split('\n').map((autor) => autor.trim()).filter((autor) => autor)
    );
    controleLivros.incluir(livro).then(() => Router.push('/LivroLista'));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Loja Next</title>
      </Head>
      <Menu />
      <main className={styles.main}>
        <h1 className={styles.title}>Dados do Livro</h1>
        <form onSubmit={incluir}>
          <div className="mb-3">
            <label className="form-label" htmlFor="titulo">Título</label>
            <input id="titulo" className="form-control" value={titulo}
              onChange={(e) => setTitulo(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="resumo">Resumo</label>
            <textarea id="resumo" className="form-control" rows={3} value={resumo}
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
            <textarea id="autores" className="form-control" rows={3} value={autores}
              onChange={(e) => setAutores(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-primary">Salvar Dados</button>
        </form>
      </main>
    </div>
  );
};

export default LivroDados;
