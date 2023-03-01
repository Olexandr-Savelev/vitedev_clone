import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { toggleBreadcrumbs } from "../../../../store/slices/breadcrumbSlice";

import styles from "./Breadcrumbs.module.scss";

const Breadcrumbs: FC = () => {
  const breadcrumbs = useAppSelector((state) => state.breadcrumbs);
  const dispatch = useAppDispatch();

  return (
    <div
      onClick={() => {
        dispatch(toggleBreadcrumbs());
      }}
      className={styles.breadcrumbs}
    >
      <span className={styles.breadcrumbs__dots}></span>
    </div>
  );
};

export default Breadcrumbs;
