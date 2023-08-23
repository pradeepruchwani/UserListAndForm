import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
          <Navbar.Brand href="#home">React User</Navbar.Brand>
          <Nav className="me-auto nav_bar_wrapper">
           <Link to='/'>Home</Link>
           <Link to ='/signup'>Signup</Link>
           <Link to ='/login'>Login</Link>
          </Nav>
      </Navbar>
    </div>
  )
}

export default Header