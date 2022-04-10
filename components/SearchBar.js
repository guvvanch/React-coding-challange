import styles from "../styles/SearchBar.module.css";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({ search, searchTerm, handleInput }) {
  return (
    <form onSubmit={search} className={styles.searchForm}>
      <input
        className={styles.searchField}
        name="search"
        value={searchTerm}
        onChange={handleInput}
        placeholder="Search..."
        type="text"
      />
      <button className={styles.btnSearch}>
        <SearchIcon />
      </button>
    </form>
  );
}
