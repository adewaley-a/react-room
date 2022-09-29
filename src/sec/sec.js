import React from "react"
import './sec.css'
import { useState } from "react"


const New = () =>{
    const [show,setShow] = useState(true)
    return(
        <div>
             <button onClick={() =>setShow(!show)}>TOGGLE</button>
       { show?<div>I am conditionally rendered</div>:null}
       <div>i am not conditionally rendered</div>

       
       
        </div>
      
    )
}

export default New
