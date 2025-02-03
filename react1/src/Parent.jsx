import { useState } from "react"

// eslint-disable-next-line react/prop-types
const Child = ({sendmessage}) => {
    const[input,setInput] = useState('')
 const handlechange =(event)=>{
setInput(event.target.value)
 }
 const handlemessage=()=>{
    sendmessage(input)
 }
  return (
    <div>
    <input type="text"
    value={input}
    onChange={handlechange}
    />  
    <button onClick={handlemessage}>add</button>
    </div>
  )
}

export default Child
