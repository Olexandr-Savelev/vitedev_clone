import { FC, useEffect, useState } from "react";

import Theme from "../Theme/Theme";
import MenuLink from "../../UI/MenuLink/MenuLink";
import IconList from "./IconList/IconList";
import SearchButton from "./SearchButton/SearchButton";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";

import cn from "classnames";
import styles from "./Header.module.scss";

const links = ["One", "Two", "Thee", "Four"];

const Header: FC = () => {
  const [shadow, setShadow] = useState<boolean>(false);

  function shadowHandler() {
    return setTimeout(() => {
      if (window.scrollY > 50) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    }, 300);
  }

  useEffect(() => {
    window.addEventListener("scroll", shadowHandler);
    return () => {
      window.removeEventListener("scroll", shadowHandler);
    };
  }, []);

  return (
    <header
      className={cn(styles.header, {
        shadow: shadow,
      })}
    >
      <div className={styles.header__container}>
        <SearchButton />
        <nav className={styles.header__nav}>
          {links.map((link) => (
            <MenuLink
              to="/"
              kind="header"
            >
              {link}
            </MenuLink>
          ))}
        </nav>
        <div className={styles.header__submenu}>
          <Theme />
          <IconList />
        </div>

        <Breadcrumbs />
      </div>
    </header>
  );
};

export default Header;
