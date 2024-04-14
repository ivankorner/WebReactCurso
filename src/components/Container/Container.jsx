import styles from "./Container.module.css";
import Productos from "../Productos/Productos";

const Container = () => {
  return (
    <>
      <div className={styles.area}>
        <h1 className={styles.h1}>App Center</h1>
      </div>
      <Productos/>
      
    </>
  );
};

export default Container;
