import { memo } from 'react';

type GreetingProps = {
    welcomeMessage: () => void;
}

const Greeting = memo(({ welcomeMessage }: GreetingProps) => {
    console.log("Child");

    
  return (
    <div>
        <h1>Hello, Greeting Component!</h1>
        <button onClick={welcomeMessage}>Click Me</button>
    </div>
  )
})

export default Greeting