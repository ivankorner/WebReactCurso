import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getProductById } from "../../utils/MockData.js";
import { DNA } from "react-loader-spinner";
import ItemDetail from "../ItemDetail/ItemDetail";




const ItemDetailContainer = () => {
    const {prodId} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        setLoading(true);
        getProductById(prodId)
        .then((res) => {
            setProduct(res);
            setLoading(false);
        })
        .catch((err) => {
            setLoading(false);
            console.log(err)});
    }, [prodId]);

  return loading === true ? (
        <DNA />
      ) : (
        <div>
          <ItemDetail {...product} />
        </div>
          
      );
  
};

export default ItemDetailContainer