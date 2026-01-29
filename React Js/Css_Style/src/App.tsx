import './App.css';
import Heading from './Heading';

function App() {
  const style: React.CSSProperties ={ color: "blue" , backgroundColor: "black" }
  return (
    <>
      <h1 style={style}>Inline Style</h1>
      <p className="p">This is Paragraph</p>
      <Heading />
    </>
  )
}

export default App
