import { useContext } from "react"
import { themeContext } from "../App"


const Header=()=>{
    const contextTheme = useContext(themeContext)
    if(!contextTheme) return null;
    const {theme,toggleTheme} = contextTheme;
    return (
        <div>
            <h1>Header</h1>
            <p>{theme}</p>
            <button onClick={toggleTheme}>Theme</button>
        </div>
    )
}

export default Header 