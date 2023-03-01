import { FC } from "react";
import { useAppSelector } from "../../../../../store/hooks";

import Theme from "../../../Theme/Theme";
import IconList from "../../IconList/IconList";

import styles from "./BreadcrumbsMenu.module.scss";

const BreadcrumbsMenu: FC = () => {
  const breadcrumbs = useAppSelector((state) => state.breadcrumbs);

  if (!breadcrumbs) return null;

  return (
    <ul className={styles.menu}>
      <div className={styles.menu__appearence}>
        Appearence <Theme />
      </div>
      <IconList />
    </ul>
  );
};

export default BreadcrumbsMenu;
