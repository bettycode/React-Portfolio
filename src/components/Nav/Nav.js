import React from 'react'
import {Link } from 'react-router-dom';
import './Nav.css'



function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className ="container">
            <Link className="navbar-brand Name" to="/React-Portfolio">
              BB
              </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll" style= {{maxHeight: 100}} >
                <li className="nav-item active">
                <Link
                  to ="/React-Portfolio"
                   className={
                    window.location.pathname === "/React-Portfolio" ? "nav-link active" : "nav-link"}
                    
                >
                  HOME
                  </Link>
                </li>
                <li className="nav-item">
                <Link
              to="/PORTFOLIO"
              className={window.location.pathname === "/PORTFOLIO" ? "nav-link active" : "nav-link"}
            >
              PORTFOLIO
            </Link>
                 
                </li>
                <li className="nav-item">
                <Link
              to="/CONTACT"
              className={window.location.pathname === "/CONTACT" ? "nav-link active" : "nav-link"}
            >
             CONTACT
            </Link>
                </li>
              
              </ul>
              
            </div>
            </div>
      </nav>
      //

      
    )
}
export default Nav;