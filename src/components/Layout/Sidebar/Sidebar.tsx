import { FC } from "react";
import { mockLinks } from "../../../mockData";

import MenuLink from "../../UI/MenuLink/MenuLink";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { toggleSidebar } from "../../../store/slices/sidebarSlice";

import styles from "./Sidebar.module.scss";
import cn from "classnames";

const Sidebar: FC = () => {
  const isSidebarOpen = useAppSelector((state) => state.sidebar);
  const dispatch = useAppDispatch();

  return (
    <>
      <div
        className={cn(styles.layout, {
          [styles.layout__open]: isSidebarOpen,
        })}
        onClick={() => {
          dispatch(toggleSidebar());
        }}
      ></div>
      <aside
        className={cn(styles.sidebar, {
          [styles.sidebar__open]: isSidebarOpen,
        })}
      >
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
    </>
  );
};

export default Sidebar;
