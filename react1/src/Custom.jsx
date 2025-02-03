import { useState } from "react"

const Custom = () => {
    const [cnt,setCnt] = useState(0)

    const inc=()=>{
        setCnt((prev)=>prev +1)
    }
    const dec=()=>{
        setCnt((p)=>p-1)
    }

  return {
    cnt,
    inc,
    dec
  }
}


const Custoomhook =()=>{
    const {cnt,inc,dec} = Custom(0)
    return(
        <>
        <h1>custom :{cnt}</h1>
        <button onClick={inc}>add</button>
        <button onClick={dec}>minus</button>
        </>
    )
}

export {Custom , Custoomhook}

