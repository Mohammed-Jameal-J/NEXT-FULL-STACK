import Header from "./compoents/Header";
import { createContext , useContext , useState } from "react";
import "./App.css"

type Theme={
  theme:"light"|"dark";
  toggleTheme:()=> void;
}

export const themeContext=createContext<Theme | undefined>(undefined);

function App() {
  const [theme, setTheme] = useState<"light"|"dark">("light")
  const toggleTheme=()=>{
    setTheme((prev)=>(prev ==="light"?"dark":"light"))
  }
  return (
    <themeContext.Provider value={{theme,toggleTheme}}>
    <div className={`app ${theme}`}>
     <Header />
    </div>
    </themeContext.Provider>
  )
}

export default App
