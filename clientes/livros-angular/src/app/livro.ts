export class Livro {
  constructor(
    public codigo: String = '',
    public codEditora: number = 0,
    public titulo: string = '',
    public resumo: string = '',
    public autores: string[] = []
  ) {}
}
