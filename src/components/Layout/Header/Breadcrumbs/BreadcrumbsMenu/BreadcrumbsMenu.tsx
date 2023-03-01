import { FC } from "react";
import { useAppSelector } from "../../../../../store/hooks";
import MenuLink from "../../../../UI/MenuLink/MenuLink";

import Theme from "../../../Theme/Theme";
import IconList from "../../IconList/IconList";

import styles from "./BreadcrumbsMenu.module.scss";

const links = ["One", "Two", "Thee", "Four"];

const BreadcrumbsMenu: FC = () => {
  const breadcrumbs = useAppSelector((state) => state.breadcrumbs);

  if (!breadcrumbs) return null;

  return (
    <div className={styles.menu}>
      <nav className={styles.menu__nav}>
        {links.map((link) => (
          <MenuLink
            to="/"
            kind="breadcrumb-menu"
          >
            {link}
          </MenuLink>
        ))}
      </nav>
      <div className={styles.menu__appearence}>
        Appearence <Theme />
      </div>
      <IconList />
    </div>
  );
};

export default BreadcrumbsMenu;
