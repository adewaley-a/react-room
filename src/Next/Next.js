import React, { useEffect } from 'react'
import { useState } from 'react'
import './Next.css'
import Aos from "aos"
import "aos/dist/aos.css"

const Home =() => {

const [name, setName] = useState('Abdullahi')
const [age, setAge] = useState(20)
const handleclick =() => {
setName('Adewale') 
setAge( 21)
}

useEffect (() => {
     Aos.init({duration: 2000,
     offset:200
    });
}, []);


    return (
       <div>
       <h1>{name} is {age} years old</h1>
       <button onClick={handleclick}>CLCIK ME, KING</button>
     
   
    <div className="cards">
        <div data-aos ="fade-down"  className="card">1</div><div  data-aos ="fade-up" className="card">2</div>
        <div data-aos ="fade-right"  className="card">3</div><div  data-aos ="fade-leftt" className="card">4</div>
        <div  data-aos ="fade-left" className="card">5</div><div data-aos ="zoom-in-up"  className="card">6</div>
        <div  data-aos ="flip-left" className="card">7</div><div  data-aos ="fade-right" className="card">8</div>
        <div className="placeholder" > </div>
    </div>

       </div>


    )
}
export default Home