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
    console.log(`Se agregaron ${cantItems} al carrito`)
  }

  return (
    <>
      <div>Cantidad</div>
      <div>
        <button onClick={handlleAdd}> + </button>
        <span> {cantItems} </span>
        <button onClick={handlleSubs}> - </button>
      </div>
      <button className="bnt btn-success" onClick={handlleAddToCart}>Agregar al Carrito</button>
    </>
  );
};

export default ItemCount;
