import { Injectable } from '@angular/core';
import { Livro } from './livro';

const baseURL = 'http://localhost:3030/livros';

interface LivroMongo {
  _id: String | null;
  codEditora: number;
  titulo: String;
  resumo: String;
  autores: String[];
}

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  async obterLivros(): Promise<Array<Livro>> {
    const resposta = await fetch(baseURL, { method: 'GET' });
    const livrosMongo: Array<LivroMongo> = await resposta.json();
    return livrosMongo.map((livro) => new Livro(
      String(livro._id),
      livro.codEditora,
      String(livro.titulo),
      String(livro.resumo),
      livro.autores.map((autor) => String(autor))
    ));
  }

  async excluir(codigo: String): Promise<boolean> {
    const resposta = await fetch(`${baseURL}/${codigo}`, { method: 'DELETE' });
    return resposta.ok;
  }

  async incluir(livro: Livro): Promise<boolean> {
    const livroMongo: LivroMongo = {
      _id: null,
      codEditora: livro.codEditora,
      titulo: livro.titulo,
      resumo: livro.resumo,
      autores: livro.autores
    };
    const resposta = await fetch(baseURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(livroMongo)
    });
    return resposta.ok;
  }
}
