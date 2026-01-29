import { useState } from "react"

function App() {
  const [todos, setTodos] = useState<{id: number, text: string}[]>([
    {id: 1, text: "Learn React"},
    {id: 2, text: "Learn TypeScript"},
    {id: 3, text: "Build a React App"},
  ])
  const handleDelete = (indexToDelete: number) => {
    setTodos(prev => prev.filter((_, index) => index !== indexToDelete))
  }
  return (
    <>
      <h3>React Key</h3>
      {todos.map((item, index) => (
        <div>
           <h2 key={item.id}>{item.text}</h2>
        <button onClick={()=>handleDelete(index)}>Delete</button>
        </div>      
      ))}
    </>
  )
}

export default App
