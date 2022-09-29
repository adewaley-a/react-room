import React from "react";
import './room.css'
import { useState } from "react";
import left from "./room-homepage-master/room-homepage-master/images/icon-angle-left.svg"
import right from "./room-homepage-master/room-homepage-master/images/icon-angle-right.svg"
import black from "./room-homepage-master/room-homepage-master/images/image-about-dark.jpg"
import light from "./room-homepage-master/room-homepage-master/images/image-about-light.jpg"
import grey from "./room-homepage-master/room-homepage-master/images/desktop-image-hero-1.jpg"
import yellow from "./room-homepage-master/room-homepage-master/images/desktop-image-hero-2.jpg"
import dark from "./room-homepage-master/room-homepage-master/images/desktop-image-hero-3.jpg"

import mgrey from "./room-homepage-master/room-homepage-master/images/mobile-image-hero-1.jpg"
import myellow from "./room-homepage-master/room-homepage-master/images/mobile-image-hero-2.jpg"
import mdark from "./room-homepage-master/room-homepage-master/images/mobile-image-hero-3.jpg"
import menu from "./room-homepage-master/room-homepage-master/images/icon-hamburger.svg"
import close from "./room-homepage-master/room-homepage-master/images/icon-close.svg"
import arrow from "./room-homepage-master/room-homepage-master/images/icon-arrow.svg"

import { useRef, useEffect } from "react";

const Room = () =>{

        const levt = useRef(null)
        const rait = useRef(null)
        const wan = useRef(null)
        const tu = useRef(null)

        const[val,setVal] = useState(1)

        function trans(){
            if(val<3){
            setVal(val + 1)}
        }
        function numerouno(){
            if(val>=2){
            setVal(val - 1)}
        }

        const[show, setShow] = useState(false)
        function chang(){
            setShow(true)
        }
        function chang2(){
            setShow(false)
        }

    return(
        <div className="cover">
            <div className="topwrap">
                <div className="one1">
                    <img src={grey} ref={wan} className={val==1?"grey":"grey1"}/>
                    <img src={yellow} ref={tu} className={val==2?"yellow1":"yellow"}/>
                    <img src={dark} className={val==3?"yellow1":"yellow"}/>

                    <img src={mgrey} className={val==1?"mgrey":"mgrey1"}/>
                    <img src={myellow} className={val==2?"myellow1":"myellow"}/>
                    <img src={mdark} className={val==3?"myellow1":"myellow"}/>

                    <div className="headbox">
                        <img src = {menu} className="menu" onClick={chang} />
                        <div className="room">room</div>
                        <div className="h">home</div><div className="s">shop</div>
                        <div className="a">about</div><div className="c">contact</div>
                    </div>
                </div>

             {show? <div className="modalcov">
                    <div className="whitebox" >
                        <img src={close} className="close" onClick={chang2} />
                        <div className="hom">home</div><div className="">shop</div>
                        <div className="">about</div><div className="">contact</div>
                    </div>
                    <div className="transparent" ></div>
                </div>:null }

                <div className="one2">
                    <div className="furth">
                    <div ref={levt}  onClick={numerouno} className="butn"><img className="angle" src={left}  /></div>
                    <div ref={rait} onClick={trans}  className="butn"><img src={right}  className="angle"/></div></div>
                    <div className={val==1?"fest":"fest1"}>Discover innovative<br/> ways to decorate</div>
                    <div className={val==1?"secund":"secund1"}>We provide unmatched quality, comfort, and style for property owners across the country. 
  Our experts combine form and function in bringing your vision to life. Create a room in your 
  own style with our collection and make your property a reflection of you and what you love.
</div>

                 <div className={val==2?"fest":"fest1"}>We are available all<br/> across the globe</div>
                    <div className={val==2?"secund":"secund1"}> With stores all over the world, it's easy for you to find furniture for your home or place of business. 
  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
  store locator. Any questions? Don't hesitate to contact us today.
</div>

                <div className={val==3?"fest":"fest1"}>Manufactured with<br/> the best materials</div>
                    <div className={val==3?"secund":"secund1"}> Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
  to ensure that every product is made as perfect and as consistent as possible. With three decades of 
  experience in this industry, we understand what customers want for their home and office.

</div>

                    <div className="third">SHOP NOW<img src={arrow} className="arrow" /></div>
                    
                </div>
            </div>


            <div className="bottomwrap">
                <div className="col1"><img className="black" src={black}/></div>
                <div className="col2">
                    <div className="about">ABOUT OUR FURNITURE</div>
                    <div className="our"> Our multifunctional collection blends design and function to suit your individual taste.
  Make each room unique, or pick a cohesive theme that best express your interests and what
  inspires you. Find the furniture pieces you need, from traditional to contemporary styles
  or anything in between. Product specialists are available to help you create your dream space.</div>
                </div>
                <div className="col3"><img className="light" src={light}/></div>
            </div>
        </div>
    )
}
export default Room