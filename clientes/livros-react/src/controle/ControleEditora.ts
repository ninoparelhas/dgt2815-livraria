import Editora from '../model/Editora';

const editoras: Array<Editora> = [
  new Editora(1, 'Alta Books'),
  new Editora(2, 'Pearson'),
  new Editora(3, 'Addison Wesley')
];

class ControleEditora {
  getEditoras(): Array<Editora> {
    return editoras;
  }

  getNomeEditora(codEditora: number): string | undefined {
    return editoras.filter((editora) => editora.codEditora === codEditora)[0]?.nome;
  }
}

export default ControleEditora;
