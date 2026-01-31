import {useEffect, useState} from 'react'

type Post = {
  userId: number
  id: number
  title: string
  body: string
}

function App() {
  const [post , setPost] = useState<Post | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${currentPage}`)
      .then(response => response.json())
      .then(data => {
        setPost(data) 
      })
  }, [currentPage])

  return (
    <>
      <h1>Post View</h1>
      {post && (
        <div>
          
          <h2>{post.id}: {post.title}</h2>
          <p>{post.body}</p>

          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      )}
    </>
  )
}

export default App
