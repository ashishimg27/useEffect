import React, { useState } from 'react'
import Hook2 from './Hook2'

function HookCon() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick = {()=>setDisplay(!display)}> toggle display </button>
            {display && <Hook2/>}
            
        
        </div>
    )
}

export default HookCon
