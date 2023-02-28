import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setTheme } from "../../../store/slices/themeSlice";
import styles from "./Theme.module.scss";
import sun from "/icons/sun.svg";
import moon from "/icons/moon.svg";

const Theme: FC = () => {
  const theme = useAppSelector((state) => state.theme);

  const dispatch = useAppDispatch();

  const changeTheme = () => {
    const themeToSet = theme === "dark" ? "light" : "dark";
    dispatch(setTheme(themeToSet));
  };

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <button
      className={styles.btn}
      onClick={() => {
        dispatch(changeTheme);
      }}
      role="switch"
    >
      <span className={styles.btn__circle}>
        {theme === "dark" ? <img src={moon} /> : <img src={sun} />}
      </span>
    </button>
  );
};

export default Theme;
