import { useEffect, useState } from 'react'

const Component = () => {
    const [count,setCount] = useState(0)
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount((prev)=>prev + 1)
        },1000)
        return()=>{
            clearInterval(interval)
        }
    },[])
  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default Component
