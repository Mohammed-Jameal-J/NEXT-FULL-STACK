import { useState, useEffect } from 'react';
const Clock = () => {
    const [time, setTime] = useState<string>(new Date().toLocaleTimeString());

    useEffect((): any => {
        const interval: any = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
  return (
    <div>
      <p>Current Time: {time}</p>
    </div>
  )
}

export default Clock