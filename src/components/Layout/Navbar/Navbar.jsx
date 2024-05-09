import logo from "../../../assets/logo.png";
import CartWidget from "../../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img
            src={logo}
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-text-top"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
              <a className="nav-link" aria-current="page">
              <Link to="/">Home</Link>
                </a> 
               </li>
               
              <li className="nav-item">
              <a className="nav-link " aria-current="page">
              <Link to="/category/Nacional">Nacionales</Link>
                </a> 
              </li>   
              <li className="nav-item">
              <a className="nav-link " aria-current="page">
              <Link to="/category/Importado">Importados</Link>
                </a> 
              </li> 
              <li className="nav-item">
              <a className="nav-link " aria-current="page">
              <Link to="/Cart">Cart</Link>
                </a> 
              </li>             
            </ul>
            
          </div>
          
        </div>
        
      </nav>
    </header>
  );
};

export default Navbar;

