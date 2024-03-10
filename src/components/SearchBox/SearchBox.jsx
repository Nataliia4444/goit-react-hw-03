//* IMPORT STYLES
import css from "./SearchBox.module.css";

export default function SearchBox({ handleOnChange }) {
  return (
    <div className={css.searchBoxSection}>
      <label>
        <span className={css.searchBoxTitle}>Find contacts by name</span>
        <input
          type="text"
          className={css.searchBoxInput}
          placeholder="Find contacts by name"
          onChange={handleOnChange}
        />
      </label>
    </div>
  );
}
