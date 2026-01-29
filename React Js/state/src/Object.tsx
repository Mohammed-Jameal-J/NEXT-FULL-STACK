import { useState } from "react"

interface User {
    name: string;
    age: number;
}

const Object = () => {
    const [user, setUser] = useState<User>({
        name: "John",
        age: 30
    })

    const updateName = (): void => {
        setUser(prevUser => ({
            ...prevUser,
            age: prevUser.age + 1
        }))
    }

    const [formValues, setFormValues] = useState<User>({
        name: "",
        age: 0
    })
    const updateData = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setUser( formValues )
    }

  return (
    <>
    <h3>Object</h3>
    <p>Name : {user.name}</p>
    <p>Age : {user.age}</p>
    <button onClick={updateName}>
        Birthday
    </button>

    <form onSubmit={updateData}>
        <input type="text" placeholder="enter name" onChange={e=>setFormValues({...formValues,name:e.target.value})}/>
        <input type="number" placeholder="enter age" onChange={e=>setFormValues({...formValues,age:parseInt(e.target.value)})} />
        <button type="submit">Submit</button>

    </form>
    </>
  )
}

export default Object