import styles from "./Container.module.css";
import Productos from "../Productos/Productos";

const Container = (props) => {

  const mensaje = "La pagina se encuentra con problemas, estamos trabajando para solucionarlos. Disculpe"

  return (
    <>
      <div className={styles.area}>
        <h1 className={styles.h1}>{props.titulo ? props.titulo : mensaje }</h1>
      </div>
      <Productos/>
      
    </>
  );
};

export default Container;
