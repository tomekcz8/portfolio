
import React, { useState } from 'react';

export default function Navbar() {
        const [isActive, setActive] = useState("false");
      
        const handleToggle = () => {
          setActive(!isActive);
        };
  
	return (
       <header>
            <a href="#"><h1 className="logo">tc</h1></a>
            <i className="fa-solid fa-bars" onClick={handleToggle}></i>
            <nav className = {isActive ? null : "active"} onClick={handleToggle}>
                <a href="#Home" className="list_item active">Home</a>
                <a href="#About" className="list_item" >About</a>
                <a href="#Portfolio" className="list_item" >Portfolio</a>
                <a href="#Contact" className="list_item" >Contact</a>
            </nav>
       </header>
    )
    }