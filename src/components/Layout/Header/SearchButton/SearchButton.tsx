import { FC } from "react";
import { useAppSelector } from "../../../../store/hooks";
import SearchIcon from "./SearchIcon";
import styles from "./Search.module.scss";

const SearchButton: FC = () => {
  const theme = useAppSelector((state) => state.theme);

  return (
    <button className={styles.search}>
      <SearchIcon fill={theme === "dark" ? "#898990" : "#303035"} />
      Search
      <div className={styles.search__tip}>Ctrl K</div>
    </button>
  );
};

export default SearchButton;
