import { useNavigate } from "react-router-dom"

const Login = () => {

    const Navigate = useNavigate();
    const handleNavigate =():void=>{
        Navigate ("/")
    }
  return (
    <div>
        <h1>Login</h1>
        <button onClick={handleNavigate}>Login</button>
    </div>
  )
}

export default Login