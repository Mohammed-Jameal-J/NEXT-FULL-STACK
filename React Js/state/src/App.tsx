import { useState } from "react"
import Object from "./Object"

function App() {
  const [count, setCount] = useState<number>(0)

  const increment = () => {
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
  }

  return (
    <>
      <div>
        <button onClick={increment}>
          count is {count}
        </button>
        <Object />
      </div>
    </>
  )
}

export default App
