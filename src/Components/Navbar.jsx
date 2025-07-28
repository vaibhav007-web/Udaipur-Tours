import React from 'react'
// import Logo from '../Images/Logo.jpg'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Navbar() {
  const navigate = useNavigate()
  const handleLogout =()=>{
    axios.get("http://192.168.1.11:5002/logout")
    .then((res)=>{
     if(res.data.status){
     navigate('/')
      
     }
    }
   ).catch(err=> 
     console.log(err)
   )
   }


  return (
    <div>
    
    {/* <Navbar start> */}
    <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor:"#4ac4f3" }}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#nav" style={{ marginRight: '75px' }}>
      {/* <img src={Logo} className="logo" alt="Logo" width={130} height={120} /> */}
      <h2 className='text-white' style={{fontFamily: "cursive"}}><b><i>Tour's and Travel</i></b></h2>
    </a>
    <button
      style={{ backgroundColor: "white" }}
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/home">HOME</Link>
        </li>
       <li className="nav-item">
          <Link className="nav-link text-white" to="/packages">PACKAGES</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/carrental">CAR RENTAL</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/udaipurtourism">UDAIPUR TOURISM</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/contact">CONTACT US</Link>
        </li>
      </ul>
    </div>
    <div>
     <span className="btn btn-outline-light align-middle" onClick={handleLogout}>Logout</span>
    </div>
  </div>
    </nav>
    {/* </Navbar end> */}

    </div>
  )
}

export default Navbar

