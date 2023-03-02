import { FC, useEffect } from "react";
import { useAppSelector } from "../../../../../store/hooks";

import Theme from "../../../Theme/Theme";
import IconList from "../../IconList/IconList";
import MenuLink from "../../../../UI/MenuLink/MenuLink";

import styles from "./BreadcrumbsMenu.module.scss";

const links = ["One", "Two", "Thee", "Four"];

const BreadcrumbsMenu: FC = () => {
  const breadcrumbs = useAppSelector((state) => state.breadcrumbs);

  useEffect(() => {
    if (window.innerWidth < 480 && breadcrumbs) {
      document.body.style.height = "100vh";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.height = "auto";
      document.body.style.overflow = "auto";
    }
  }, [breadcrumbs]);

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
