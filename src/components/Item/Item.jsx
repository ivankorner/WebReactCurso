import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";


const Item = ({ nombre, id, type, precio, stock, descripcion, image }) => {
  

  const handleOnClick = () => {
    
  }
    
  
  return (
    

      <Card style={{ width: "20rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
        <Card.Text>Procedencia: {type}</Card.Text>
        <Card.Text>Precio: $ {precio}</Card.Text>
        
        <br />  

        <Link className="btn btn-info" to={`/products/${id}`} onClick={handleOnClick} >Detalles</Link>



        <Card.Text>Stock: {stock}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Item;
