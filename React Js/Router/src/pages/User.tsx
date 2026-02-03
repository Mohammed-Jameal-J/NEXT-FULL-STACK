import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"

type UserParams ={
    id:string
}
const User =()=>{
    const {id}=useParams<UserParams>();
    const [userData,setUserData]=useState<any>(null);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .then(data=>setUserData(data))
    },[])

    return (
        <div>
            <h1>User Page</h1>
            <p>name : {userData?.name}</p>
            <p>Email : {userData?.email}</p>
        </div>
    )
}

export default User