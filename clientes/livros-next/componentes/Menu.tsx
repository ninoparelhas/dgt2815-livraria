import Link from 'next/link';

export const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" href="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/LivroLista">Catálogo</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/LivroDados">Novo</Link>
        </li>
      </ul>
    </nav>
  );
};
