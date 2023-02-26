import { FC } from "react";

import MenuLink from "../../UI/MenuLink/MenuLink";

import styles from "./SideMenu.module.scss";

import { mockLinks } from "../../../mockData";

const SideMenu: FC = () => {
  return (
    <ul className={styles.side_menu}>
      {mockLinks.map((link, i) => (
        <li key={mockLinks[i]}>
          <MenuLink
            kind="content-menu"
            to="/"
          >
            {link}
          </MenuLink>
        </li>
      ))}
    </ul>
  );
};

export default SideMenu;
