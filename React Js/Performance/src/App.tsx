import Greeting from "./Greeting"
import { useState , useCallback , useMemo } from "react"


function App() {
  const [count, setCount] = useState(0)
    console.log("App");
  

  const welcomeMessage = useCallback((): void => {
    alert(`Welcome to the Counter App! Current count is ${count}`);
  }, [])

  const multipleByHundred=useMemo(()=>{
    console.log("Hundred");   
    return count * 100
  },[count])

  

  return (
    <>
      <h1>Counter App</h1>
      <Greeting welcomeMessage={welcomeMessage} />
      <h6>Count: {count}</h6>
      <h6>Count multiplied by 100: {multipleByHundred}</h6>
      <button onClick={() =>setCount(count + 1)}>Increment</button>

    </>
  )
}

export default App
