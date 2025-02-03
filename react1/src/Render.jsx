import { useState } from "react"

// eslint-disable-next-line react/prop-types
const Render = ({render}) => {
    const [isOn,setIsOn] = useState(false)
    const toggle=()=>{
        setIsOn(!isOn)
    }
  return (
    <div>
      <button onClick={toggle}>Toggle
      </button>
      {render(isOn)}
    </div>
  )
}

export default Render
