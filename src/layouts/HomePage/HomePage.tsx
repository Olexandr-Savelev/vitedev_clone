import { FC } from "react";
import Layout from "../../components/Layout/Layout";
import styles from "./HomePage.module.scss";

const HomePage: FC = () => {
  return (
    <Layout>
      <h1 className={styles.page__heading}>First</h1>
      <div className={styles.content_item}>
        <h3 className={styles.content_item__heading}>Heading</h3>
        <p className={styles.content_item__text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          ratione culpa dolor molestiae delectus? Dolorem autem delectus quae
          molestias doloribus, suscipit qui! Quis qui ea quas. Eaque earum
          distinctio adipisci, optio, veritatis voluptatibus repudiandae dolores
          velit illum, est eius accusantium suscipit porro! Recusandae, esse
          perspiciatis ea minus dolorum explicabo dolores excepturi
          exercitationem illum laboriosam modi deleniti nostrum quod odio magni
        </p>
      </div>
      <div className={styles.content_item}>
        <h3 className={styles.content_item__heading}>Heading</h3>
        <p className={styles.content_item__text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          ratione culpa dolor molestiae delectus? Dolorem autem delectus quae
          molestias doloribus, suscipit qui! Quis qui ea quas. Eaque earum
          distinctio adipisci, optio, veritatis voluptatibus repudiandae dolores
          velit illum, est eius accusantium suscipit porro! Recusandae, esse
          perspiciatis ea minus dolorum explicabo dolores excepturi
          exercitationem illum laboriosam modi deleniti nostrum quod odio magni
        </p>
      </div>
      <div className={styles.content_item}>
        <h3 className={styles.content_item__heading}>Heading</h3>
        <p className={styles.content_item__text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          ratione culpa dolor molestiae delectus? Dolorem autem delectus quae
          molestias doloribus, suscipit qui! Quis qui ea quas. Eaque earum
          distinctio adipisci, optio, veritatis voluptatibus repudiandae dolores
          velit illum, est eius accusantium suscipit porro! Recusandae, esse
          perspiciatis ea minus dolorum explicabo dolores excepturi
          exercitationem illum laboriosam modi deleniti nostrum quod odio magni
        </p>
      </div>
    </Layout>
  );
};

export default HomePage;
