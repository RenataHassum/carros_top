import './styles.css';

export default function SearchBar() {
  return (
    <form className='search-bar ct-container'>
      <input type="text" placeholder="Digite sua busca" />
      <button type="submit">Buscar</button>
    </form>
  );
}
