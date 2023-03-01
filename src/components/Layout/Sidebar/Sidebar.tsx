import { FC } from "react";
import { mockLinks } from "../../../mockData";
import MenuLink from "../../UI/MenuLink/MenuLink";
import styles from "./Sidebar.module.scss";

const Sidebar: FC = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__logo}>LOGO_BLOCK</div>
      <ul className={styles.sidebar__list}>
        <div className={styles.sidebar__list_title}>Title</div>
        {mockLinks.map((link) => (
          <li className={styles.sidebar__list_item}>
            <MenuLink
              kind="sidebar"
              to="/"
            >
              {link}
            </MenuLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
