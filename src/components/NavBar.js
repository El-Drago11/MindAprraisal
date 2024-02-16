import React from "react";


const NavBar = () =>{
 
    return (
      <div>
        <div className="container-fluid">
          <nav className="navbar navbar-expand-xxl navbar-dark bg-dark" style={{ position: "fixed",left: "0px",top:" 0px" , zIndex:"2",width:"100%"}}>
          
            <ul className="navbar-brand" href="/">
              <strong style={{'fontSize':"40px"}}>Mind-Appraisal</strong>
            </ul>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"aria-expanded="false"  aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item mx-4" >
                  <a className="nav-link" aria-current="page" href="/MindAprraisal" style={{fontSize:"20px"}}>
                  HOME
                  </a>
                </li>
                <li className="nav-item mx-4" >
                  <a className="nav-link" aria-current="page" href="/sports" style={{'fontSize':"20px"}}>
                  Sports
                  </a>
                </li>
                <li className="nav-item mx-4" >
                  <a className="nav-link" href="/business" style={{'fontSize':"20px"}}>
                  Business
                  </a>
                </li>
                <li className="nav-item mx-4" >
                  <a className="nav-link" href="/entertainment" style={{'fontSize':"20px"}}>
                   Entertainment
                  </a>
                </li>
                <li className="nav-item mx-4" >
                  <a className="nav-link" href="/health" style={{'fontSize':"20px"}}>
                  Health
                  </a>
                </li>
                <li className="nav-item mx-4" >
                  <a className="nav-link" href="/science" style={{'fontSize':"20px"}}>
                  Science
                  </a>
                </li>
                <li className="nav-item mx-4" >
                  <a className="nav-link" href="/technology" style={{'fontSize':"20px"}}>
                  Technology
                  </a>
                </li>
              </ul>
            </div>
            </nav>
          </div>
        
      </div>
    );
  }

export default NavBar;
