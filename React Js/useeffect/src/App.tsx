import {useState} from 'react';
import Counter from './Counter';
import Clock from './Clock';

function App() {

  
  const [hide, setHide] = useState(false);



  return (
    <>
     {!hide && <Counter />}
     <button onClick={() => setHide(!hide)}>{hide ? "Show Counter" : "Hide Counter"}</button>
     <hr />
     <Clock />
    </>
  )
}

export default App
