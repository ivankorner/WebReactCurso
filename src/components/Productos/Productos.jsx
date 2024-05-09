import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../utils/MockData";
import ItemList from "../ItemList/ItemList";
import { DNA } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import { usePaginate } from "../../hooks/usePaginate";

const Productos = () => {
  const [productoAgregado, setProductoAgregado] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();



  const itemsPerPage = 2;

  const {
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    paginate,
    totalPagesArray,
    currentData,
  } = usePaginate(products, itemsPerPage);




  useEffect(() => {
    setLoading(true);
    if (categoryId) {
      getProductsByCategory(categoryId).then((res) => {
        setProducts(res);
        setLoading(res);
      });
    } else {
      getProducts()
        .then((res) => {
          setProducts(res);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [categoryId]);

  const agregar = () => {
    productoAgregado > 0
      ? setProductoAgregado
      : alert("No se puede agregar el producto");
  };

  return (
    <>
      {loading === true ? (
        <DNA />
      ) : (
        <div>
          <ItemList productsList={currentData} />
          <button onClick={prevPage}>Anterior</button>
          {totalPagesArray.map((page) => {
            if (page < 6) {
              return (
                <button key={page} onClick={() => paginate(page)}>
                  {page}
                </button>
              );
            }
            if (page === 6) {
              return "...";
            }
            if (page === totalPages) {
              return (
                <button key={page} onClick={() => paginate(page)}>
                  {page}
                </button>
              );
            }
          })}
          <button onClick={nextPage}>Siguiente</button>
        </div>
      )}
    </>
  );
};

export default Productos;
