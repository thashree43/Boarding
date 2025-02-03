import  { useState } from 'react'

const Show= () => {
    const [visible,setVisible] = useState(false)
const handleclick = ()=>{
    setVisible((prev)=>!prev)
}

  return (
    <div>
      <button onClick={handleclick}>Click</button>
      <h1>{visible && <p>This is madness</p>}</h1>
    </div>
  )
}

export default Show
