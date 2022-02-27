import React, { FunctionComponent, Dispatch, SetStateAction } from "react";
import styles from "components/search/Search.module.scss";
import { ICharacterInfo } from "interfaces/Character";

interface Props {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  setPageNumber: Dispatch<SetStateAction<number>>;
}
// TODO: debounce eklenecek.
const Search: FunctionComponent<Props> = (props) => {
  return (
    <form className="d-flex justify-content-center gap-4 my-4">
      <input
        onChange={(e) => {
          props.setPageNumber(1);
          props.setSearch(e.target.value);
        }}
        placeholder="Karakter Ara"
        type="text"
        className={styles.input}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
        className={`${styles.btn} btn fs-5`}
      >
        Ara
      </button>
    </form>
  );
};

export default Search;
