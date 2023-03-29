import React from 'react';
import '../style/Navbar.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
   <nav className="navbar navbar-expand-lg bg-dark">
   <div className="container-fluid">
    <Link to={`logo`} className="navbar-brand" ><img  className="logo" src={logo} />Akshay Rajodiya</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">
      <li className="nav-item">
          <Link to={`home`} className="nav-link" >Home</Link>
        </li>
       
        <li className="nav-item">
        <Link to={`about-me`} className="nav-link" >About Me</Link>
        </li>
        <li className="nav-item">
          <Link to={`skill`} className="nav-link" >Skill</Link>
        </li>
        <li className="nav-item">
        <Link to={`project`} className="nav-link" >Project</Link>
        </li>
        <li className="nav-item">
        <Link to={`contact`} className="nav-link" >Contact</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

    
    
  </>
  )
}

export default Navbar