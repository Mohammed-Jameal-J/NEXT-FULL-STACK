import { useRef , useState } from "react"

const Counter = () => {

    const countRef = useRef<number>(0)
    const increment=()=>{
        countRef.current += 1
        console.log("incremented:", countRef.current );
        
    }
  return (
    <div>
        <h2></h2>
        <button onClick={increment}>Click Me ++</button>
    </div>
  )
}

export default Counter