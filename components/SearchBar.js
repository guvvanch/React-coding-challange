export default function SearchBar({ search, searchTerm, handleInput }) {
  return (
    <div>
      <form onSubmit={search}>
        <input
          className="search"
          name="search"
          value={searchTerm}
          onChange={handleInput}
          type="text"
        />
        <button className="btn-search">Search</button>
      </form>
    </div>
  );
}
