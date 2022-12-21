import React from "react";
import {Link,Outlet} from "react-router-dom";
import "./iiitdmj.scss";
import logo from "../../images/iiitdmj.jpeg";
export default function  Navbar(){
    return(
            <>

                <div className="iiitdmj-name">
                <div className="iiitdmj-logo-parent"> 
                    <img src={logo} alt="logo"  className="iiitdmj-logo" />
                </div>
                <div>
                <h1>IIITDM Jabalpur - Indian Institute of Information Technology</h1>
                <h1>Design And manufacturing, Jabalpur</h1>
                <p>Jabalpur</p>
                </div>
                </div>
                
                <nav className="nav-menu">
                <ul>
                    <li> <Link to="/iiitdmj/college-info" className="nav-menu-title" >College Info</Link></li>
                    <li> <Link to="/iiitdmj/course-and-fees" className="nav-menu-title">Course and fees</Link></li>
                    <li> <Link to="/iiitdmj/placement" className="nav-menu-title">Placement</Link></li>
                    <li> <Link to="/iiitdmj/photos" className="nav-menu-title">Photos</Link></li>
                    <li> <Link to="/iiitdmj/scholarship" className="nav-menu-title">Scholarship</Link></li>
                    <li> <Link to="/iiitdmj/faculty" className="nav-menu-title">Faculty</Link></li>
                </ul>
            </nav>
            <Outlet/>
            </>

            
        
    )
}