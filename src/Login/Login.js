import React from "react"
import './Login.css'
import Aos from "aos"
import { useEffect } from "react"
import { useState } from "react"



const Login =() => {

    useEffect(()=>
    {
        Aos.init({duration:1400})
    }
    ,[])
    
    const[values, setValues] = useState({
        username:"",
        password:"",
})
    const handlePassWordInputChange = (event) =>{
        setValues({...values, password:event.target.value})
    }

    const handleUserNameInputChange = (event) =>{
        setValues({...values, username:event.target.value})
    }
    const[show,setShow] = useState(true)

       return(

       <div className = "cover">
           <div data-aos= "zoom-in-up" className= "field">
               <h1 className="log">LOGIN</h1>

               <div className="wrap"><input
               onChange={handleUserNameInputChange}
               value = {values.username}
               type="text"
               placeholder="Enter your username"
               className="input"
               />
              
               <label className="label" for="username">Username</label>
              {show && !values.username? <span className="error">This field cannot be left empty!</span>:null}

               <input
               onChange={handlePassWordInputChange}
               value = {values.password}
               type="text"
               placeholder="Enter your Password"
               className="inputr"
               />
               <label className="labelr" for="username">Password</label>
              {show && !values.password ?<span className="erro">This field cannot be left empty!</span>:null}
               <div className="reg" >Login</div>
               </div>

           </div>
       </div>

       )

}

export default Login