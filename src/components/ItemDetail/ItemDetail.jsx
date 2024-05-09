import Card from "react-bootstrap/Card";
import ItemCount from "../ItemCount/ItemCount";
import styles from "./ItemDetail.module.css";

const ItemDetail = ({
  nombre,
  id,
  type,
  precio,
  stock,
  descripcion,
  image,
}) => {
  return (
    <>
      <br />
      <h2 className=" text-center">Detalles del Producto</h2>

      <div className={styles.itemDatalles}>
        <Card
          className="align-content-center text-center"
          style={{ width: "20rem" }}
        >
          <div className=" row justify-content-md-center">
            <Card.Img
              variant="top"
              src={image}
              className="justify-content-center object-fit-cover"
              style={{ width: "60%" }}
            />
          </div>

          <Card.Body>
            <Card.Title className="text-center">
              <h3>{nombre}</h3>
            </Card.Title>
            <Card.Text>
              <Card.Text>{descripcion}</Card.Text>
              <p>Procedencia: {type}</p>
              <h4>Precio: ${precio}</h4>
              <Card.Text>Stock: {stock}</Card.Text>
            </Card.Text>

            <ItemCount />
            <br />
            <br />
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default ItemDetail;
