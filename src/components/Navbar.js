import React from 'react';
import logo from './logo.png'

const Navbar=()=> {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container">

        
  <a class="navbar-brand" href="#"><img  className="logo" src={logo} alt="logo"/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">about us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">experience</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">references</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">contacts</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
    )
}

export default Navbar