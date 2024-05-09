import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";


const Item = ({ nombre, id, type, precio, descripcion, image }) => {
  

  const handleOnClick = () => {
    
  }
    
  
  return (
    

      <Card  className="align-content-center text-center" style={{ width: "20rem" }}>
      <Card.Img variant="top" src={image}  style={{width: "50%"}}/>
      <Card.Body>
        <Card.Title className="text-center">          
          <h3>{nombre}</h3>    
        </Card.Title>        
        <Card.Text>
          <p>Procedencia: {type}</p>
          <h4>Precio: ${precio}</h4>
        </Card.Text>
        
        
        <br />  

        <Link className="btn btn-info" to={`/products/${id}`} onClick={handleOnClick} >Detalles</Link>



        
      </Card.Body>
    </Card>
  );
};

export default Item;
