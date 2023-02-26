import { FC } from "react";
import styles from "./IconLink.module.scss";

interface IconLink {
  title: string;
  adress: string;
  d: string;
  height?: number;
  width?: number;
}

const IconLink: FC<IconLink> = ({
  title,
  adress,
  d,
  height = 22,
  width = 22,
}) => {
  return (
    <a className={styles.link}>
      <svg
        className={styles.link__img}
        role="img"
        viewBox="0 0 24 24"
        width={`${width}px`}
        height={`${height}px`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>{title}</title>
        <path d={d} />
      </svg>
    </a>
  );
};

export default IconLink;
