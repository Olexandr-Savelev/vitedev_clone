import { FC } from "react";
import { useAppDispatch } from "../../../store/hooks";
import { toggleSidebar } from "../../../store/slices/sidebarSlice";
import styles from "./Subheader.module.scss";

const Subheader: FC = () => {
  const dispatch = useAppDispatch();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.subheader}>
      <button
        onClick={() => {
          dispatch(toggleSidebar());
        }}
      >
        Menu
      </button>
      <button onClick={scrollToTop}>Return to top</button>
    </div>
  );
};

export default Subheader;
