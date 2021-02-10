import React from 'react'
import './Nav.css'


function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className ="container">
            <a className="navbar-brand Name" href="#">BB</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll" style= {{maxHeight: 100}} >
                <li className="nav-item active">
                  <a className="nav-link" href="#">HOME <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">PORTFOLIO</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">CONTACT</a>
                </li>
              
              </ul>
              
            </div>
            </div>
      </nav>
      //

      
    )
}
export default Nav