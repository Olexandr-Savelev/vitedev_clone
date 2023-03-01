import { FC } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import cn from "classnames";
import styles from "./MenuLink.module.scss";

interface MenuLink extends NavLinkProps {
  kind: "sidebar" | "header" | "content-menu" | "breadcrumb-menu";
  children: string;
}

const MenuLink: FC<MenuLink> = ({ children, kind, ...rest }) => {
  return (
    <NavLink
      className={cn(styles.link, {
        [styles.link__header]: kind === "header",
        [styles.link__sidebar]: kind === "sidebar",
        [styles.link__content_menu]: kind === "content-menu",
        [styles.link__breadcrumb_menu]: kind === "breadcrumb-menu",
      })}
      {...rest}
    >
      {children}
    </NavLink>
  );
};

export default MenuLink;
