import React from 'react'
import { useHistory } from 'react-router-dom'
import styles from "./Header.module.css";


const Header = () => {
    const history = useHistory()
    if (!localStorage.getItem("uid")) {
      history.push("/");
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">

      <li className="nav-item active" onClick={()=>{
          history.push("/createmanager")
      }}>
        <a className="nav-link" href="">Branch Manager <span className="sr-only"></span></a>
      </li>
    
      
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
          Request
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="" onClick={()=>{
              history.push("/requesttab")
          }}>PENDING</a>
          <a className="dropdown-item" onClick={()=>{
              history.push("/acceptreq")
          }} href="">Accepted</a>
          <a className="dropdown-item" onClick={()=>{
              history.push("/rejectreq")
          }} href="">Rejected</a>
        </div>
      </li>
   
    </ul>
    <span class="navbar-text">
    <button
        onClick={() => {
          history.replace("/");
          localStorage.removeItem("uid");
        }}
        className={`btn btn-secondary ${styles.outBtn}`}
      >
        SIGN OUT
      </button>    </span>
  
  </div>
</nav>
    )
}

export default Header
