function App() {
   const handleClick = () => {
      alert("Button Clicked")
    }

  return (
    <>
      <h1 className="hello">Hello World</h1>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" />
      <button onClick={handleClick}>Submit</button>
    </>
  )
}

export default App
