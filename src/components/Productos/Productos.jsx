import producto1 from "../../assets/producto1.jpg";
import producto2 from "../../assets/producto2.jpg";
import producto3 from "../../assets/producto3.jpg";
import styles from "./Productos.module.css";

const Productos = () => {
  return (
    <>
      <div className={styles.productos}>

        {/* Card Producto 1*/}
        <div className={styles.tarjeta}>
          <div className={styles.titulo}>Samsung Galaxy Z Flip5 Cream</div>
          <div className={styles.cuerpo}>
            <img className={styles.img} src={producto1} alt="muestra" />
            $2.009.999
          </div>
          <div className={styles.pie}>
            <a href="#">Más información</a>
          </div>
        </div>

         {/* Card Producto 2*/}
         <div className={styles.tarjeta}>
          <div className={styles.titulo}>Samsung Galaxy A34 5g Lime</div>
          <div className={styles.cuerpo}>
            <img className={styles.img} src={producto2} alt="muestra" />
            $700.00
          </div>
          <div className={styles.pie}>
            <a href="#">Más información</a>
          </div>
        </div>

         {/* Card Producto 3*/}
         <div className={styles.tarjeta}>
          <div className={styles.titulo}>XIAOMI REDMI Ocean Blue</div>
          <div className={styles.cuerpo}>
            <img className={styles.img} src={producto3} alt="muestra" />
            $230.000
          </div>
          <div className={styles.pie}>
            <a href="#">Más información</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productos;
