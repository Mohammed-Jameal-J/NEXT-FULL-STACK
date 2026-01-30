import React from 'react'

type CardProps = {
    children: React.ReactNode
}

const Card = ({children}: CardProps) => {
  return (
    <>
    {children}
    <h2>Card Component</h2>
    <button>Learn More</button>
    
    </>
  )
}

export default Card