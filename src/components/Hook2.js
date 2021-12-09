import React, { useEffect, useState } from 'react'

function Hook2() {
   const [x, setX] = useState(0)
   const [y, setY] = useState(0)


   const logMousePosition = e => {
       console.log("mouse event")
      setX(e.clientX)
      setY(e.clientY)
   }

   useEffect(()=>{
       console.log('useeffect called')
       window.addEventListener('mousemove' , logMousePosition)
       return()=>{
           console.log('component unmount')
           window.removeEventListener('mousemove' , logMousePosition)
       }
   },[])

    return (
        <div>
            Hooks X - {x} Y - {y}
            </div>
    )
}

export default Hook2
