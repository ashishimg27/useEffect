import React, { useEffect, useState } from 'react'

function Hook1() {
    const [count,setCount] = useState(0)
    const [name,setName] = useState('')
   
    useEffect(()=>{
        console.log("updating the title")
        document.title = `you clicked ${count} times`
    },[count])

    return (
        <div>
            <input type="text" value={name} onChange={e=> setName(e.target.value)}/>
            <button onClick={()=>setCount(count+1)} >Click {count} times</button>
        </div>
    )
}

export default Hook1
