import React, { Component } from 'react'
import "./style.css"
// const link="./../../Data/logo1.png";
class Header extends Component {
    render() {
        return (
            <>
            <div className="mainRow"> 
            <div className="logoImage"/> 
            <ul className="listlinks"> 
            <li className="linknames"> Home</li>
            <li className="linknames"> Learners</li>
            <li className="linknames"> CircleSpace</li>
            <li className="linknames"> Blogs</li>
            <li className="linknames"> About Us</li>
            <li className="linknames"> Careers</li>
            <li className="linknames"> .com.au</li>
            </ul>
            </div>
            </>
        )
    }
}
export default Header

