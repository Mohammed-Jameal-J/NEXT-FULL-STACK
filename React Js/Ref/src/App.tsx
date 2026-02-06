import { useRef } from "react"

function App() {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const handleFocus=()=>{
    if(inputRef.current)
      console.log( inputRef.current.value);    
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>Focus Input</button>
      
    </div>
  )
}

export default App
