import Card from "react-bootstrap/Card";
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
    <div>

      <h2>Detalles del Producto</h2>
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>{descripcion}</Card.Text>
          <Card.Text>Procedencia: {type}</Card.Text>
          <Card.Text>Precio: $ {precio}</Card.Text>

          <Card.Text>Stock: {stock}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetail;
