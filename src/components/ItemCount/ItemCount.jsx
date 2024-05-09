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

return (
    <>
<div>Cantidad</div>
    <button onClick={handlleAdd}> + </button>
    <span> {cantItems} </span>
    <button onClick={handlleSubs}> - </button>
    </>
);
};

export default ItemCount;
