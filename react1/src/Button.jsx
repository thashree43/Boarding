import  { useState } from 'react'

const Buttontoggle = () => {
    const[visible ,setVisible] = useState(false)
const displaytoggle=()=>{
setVisible(!visible)
}
  return (
    <div>
      <button onClick={displaytoggle} >click</button>
      <div>
        {visible &&  }
      </div>
    </div>
  )
}

export default Buttontoggle
