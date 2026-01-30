import { useState } from "react"

type Todo={
  id:number
  text:string
  completed:boolean
}

function App() {
  const [todos,setTodos]=useState<Todo[]>([
    {id:1,text:"Learn TypeScript",completed:false},
    {id:2,text:"Build a React App",completed:false},
    {id:3,text:"Deploy the App",completed:false}
  ])
  const [inputValue,setInputValue]=useState<string>("")

  const handleAddTodo=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(inputValue.trim()==="") return

    const newTodo :Todo={
      id:todos.length+1,
      text:inputValue,
      completed:false
    }
    setTodos([newTodo,...todos])
    setInputValue("")
  }

  const handleDelete=(id:number)=>{
    setTodos(todos.filter(todo=>todo.id!==id))
  }

  const [searchTerm,setSearchTerm]=useState<string>("")


  const filteredTodos=todos.filter(todo=>todo.text.toLowerCase().includes(searchTerm.toLowerCase()))


  return (
    <>
      <h1>My Todos</h1>
      <form onSubmit={handleAddTodo}>
        <input type="text" placeholder="New todo" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button type="submit">Add Todo</button>
      </form>
      <hr />
      <input type="text" placeholder="Search todos"  value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} /> 
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>{todo.text}
          <button onClick ={()=>handleDelete(todo.id)}>delete</button>
          <button onClick={()=>setTodos(todos.map(t=>t.id===todo.id?{...t,completed:!t.completed}:t))}>{todo.completed?"Undo":"Complete"}</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
