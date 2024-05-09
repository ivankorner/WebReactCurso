import Home from "./Pages/Home/Home.jsx"
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Layout/Navbar/Navbar.jsx"
import Footer from "./components/Layout/Footer/Footer.jsx"
import Cart from "./components/Cart/Cart.jsx"
import Error from "./components/Error/Error.jsx"
import Productos from "./components/Productos/Productos.jsx"
import ItemDetailContainer from "../src/components/ItemDetailContainer/ItemDetailContainer.jsx"


function App() {  

  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/category/:categoryId" element={<Productos/>}/> 
          <Route path="/products/:prodId" element={<ItemDetailContainer/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
        <Footer/>       
    </BrowserRouter>
  );
}

export default App
