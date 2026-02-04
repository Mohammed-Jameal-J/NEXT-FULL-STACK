// import Content from "../components/Content"
import { lazy, Suspense } from "react"

const Content = lazy(()=> import ("../components/Content"))

const About=()=>{
    
    return(
        <div>
            <h1>About</h1>
            <Suspense fallback={<div>Loading ...</div>}>
                 <Content />
            </Suspense>
          
        </div>
    )
}

export default About