const Content =()=>{
    const dummyItems= Array.from({length: 3000},(_,i)=>`Item ${i+1}`)

    return(
        <div>
            <h1>Content</h1>
         <ul>
                {dummyItems.map(item =>(
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
        
    )
}

export default Content