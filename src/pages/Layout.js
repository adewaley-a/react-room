import React from "react";
import './Layout.css'
import { Outlet, Link } from "react-router-dom";

const Layout = () =>{

    return(
        <div>
            <nav className="navbar"><div className="first"></div>
            <ul><li className="lis">
                <Link to="/" style={{textDecoration: 'none',color:'yellow'}}>HOME</Link>
                </li><li className="lis"><Link to= "/contact"style={{textDecoration: 'none',color:'yellow'}} >CONTACT</Link></li>
            <li className="lis"><Link to="/nopage" style={{textDecoration: 'none',color:'yellow'}}>NOPAGE</Link></li>
            </ul></nav>
            <Outlet/>
        </div>
    )
}

export default Layout