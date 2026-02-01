import api from "./api/axiosinstance"
import {type Product , type ProductResponse } from "./types/product"

import { useState,useEffect } from "react"

function App() {  

  const [data, setData] = useState<ProductResponse>({
    products:[],total:0,skip:0,limit:0
  })
  const [loading, setLoading] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)
 
  useEffect(() => {
    setLoading(true)
    api.get(`/products?limit=10&skip=${(page-1)*10}`)
    .then((response) => {
      setData(response.data)
    })
    .finally(() => {
      setLoading(false)
    })
  }, [ page]) 
  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <div>
      <h1>Products</h1>
      {data.products && data.products.map((product: Product) => (
        <li key={product.id}>
          {product.title}- {} - ${product.thumbnail}
        </li>
      ))}
      <button onClick={() => setPage(page + 1)}>Next Page</button>
      <button onClick={() => setPage(page - 1)}>Previous Page</button>
    </div >
  )
}

export default App
