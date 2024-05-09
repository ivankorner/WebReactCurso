
import Container from "../../components/Container/Container.jsx"


//Props
const nombreWeb = {
    titulo: "App Center"
  }

const Home = () => {
    
  return (
    <div>
      <Container {...nombreWeb} /> 
      
    </div>
  )
}

export default Home