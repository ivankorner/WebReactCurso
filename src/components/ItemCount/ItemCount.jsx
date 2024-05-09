import { useState } from "react";

const ItemCount = () => {
  const [cantItems, setcantItems] = useState(0); // useState
  const handlleAdd = () => {
    setcantItems(cantItems + 1);
  };
  const handlleSubs = () => {
    if (cantItems > 0) {
      setcantItems(cantItems - 1);
    } else {
      alert("No se puede restar");
    }
  };

  const handlleAddToCart = () => {
    console.log(`Se agregaron ${cantItems} al carrito`);
  };

  return (
    <>
      <div>Cantidad</div>
      <div>
        <button className="btn btn-secondary" onClick={handlleSubs}>
          {" "}
          -{" "}
        </button>
        <span> {cantItems} </span>

        <button className="btn btn-secondary" onClick={handlleAdd}>
          {" "}
          +{" "}
        </button>
      </div>
      <br />
      <div>
        <button className="btn btn-success" onClick={handlleAddToCart}>
          Agregar al Carrito
        </button>
      </div>
    </>
  );
};

export default ItemCount;
