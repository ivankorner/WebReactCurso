import Navbar from "./components/Navbar/Navbar.jsx"
import Container from "./components/Container/Container.jsx"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Footer from "./components/Footer/Footer.jsx"

//Props
const nombreWeb = {
  titulo: "App Center"
}

function App() {  

  return (
    <>
      <Navbar/>

      <Container {...nombreWeb} />   
      <Footer/>
    </>
  )
}

export default App
