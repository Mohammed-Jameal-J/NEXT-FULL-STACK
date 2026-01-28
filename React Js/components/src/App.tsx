import React from "react"

function App() {
   const handleClick = () : void => {
      alert("Button Clicked")
    }
    const name: string = "World"

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
      console.log(event.target.value)
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) : void => {
      event.preventDefault()
      console.log("Form Submitted")
    }

  return (
    <>
      <h1 className="hello">Hello World</h1>
      <p>name : {name}</p>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" onChange={handleChange} required={true} />
      <button onClick={handleClick}>Submit</button>

      <form onSubmit={handleSubmit}>
        <input type="text" name="username" />
        <input type="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default App
