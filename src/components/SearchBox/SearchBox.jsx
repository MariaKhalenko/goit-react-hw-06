import css from "./SearchBox.module.css";

const SearchBox = ({ filter, setFilter }) => {
  return (
    <div>
      <label className={css.searchTitle}>
        Find contacts by name
        <input
          className={css.inputSearch}
          type="text"
          placeholder="Search..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </label>
    </div>
  );
};

export default SearchBox;
