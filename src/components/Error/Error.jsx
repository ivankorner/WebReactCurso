import errorimg from "../../assets/error404.jpg"

const Error = () => {
  return (
    <div className="justify-content-center text-center">
      <img  src={errorimg} style={{maxWidth:"500px"}} alt="Error404" />
      
    </div>
  )
}

export default Error