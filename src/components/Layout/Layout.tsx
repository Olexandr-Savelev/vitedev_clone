import { FC, ReactNode } from "react";

import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

import styles from "./Layout.module.scss";
import SideMenu from "./SideMenu/SideMenu";
import BreadcrumbsMenu from "./Header/Breadcrumbs/BreadcrumbsMenu/BreadcrumbsMenu";
import Subheader from "./Subheader/Subheader";

interface Layout {
  children: ReactNode;
}

const Layout: FC<Layout> = ({ children }) => {
  return (
    <>
      <div className={styles.layout}>
        <Header />
        <BreadcrumbsMenu />
        <Sidebar />
        <div className={styles.layout__content}>
          <Subheader />
          <div className={styles.layout__main_container}>
            <main className={styles.layout__main_content}>{children}</main>
            <SideMenu />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
