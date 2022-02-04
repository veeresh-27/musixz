import React from 'react';
import {Link} from 'react-router-dom'
import classes from './Navbar.module.css'
import Mlogo from '../../Utils/logo.png'

function Navbar() {
  return <div className={classes.navbar}>
      
      <div >
          <ul className={classes.links}>
              
              <li className={classes.logo}>
              
          <img src={Mlogo} alt="Logo"></img>
            Spotify
              </li>
              <li >
                  <Link to='/'>
                  
                  Home
                  </Link>
              </li>
              <li >
              <Link to='/'>
                  
              About
                  </Link>
                  
              </li>
              
          </ul>
      </div>
  </div>;
}

export default Navbar;
