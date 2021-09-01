import React, { useState, useEffect } from 'react';
import { Switch, Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { CgProfile } from 'react-icons/cg';
import { GiBirdHouse, GiKiwiBird } from 'react-icons/gi';
import { FaKiwiBird } from 'react-icons/fa';
import { AiOutlineLogout } from 'react-icons/ai';
import addFinch from '../../../public/img/converted-addFinch-01 copy.svg';

const NavBar = (props) => {
  return (
    <IconContext.Provider value={{ color: "white"}}>
    <div className="nav-container d-flex">
      <div className="d-flex flex-column flex-shrink-0 " style={{width: "4.5rem"}}>
        <a href="#" className="d-block p-3 link-dark text-decoration-none"></a>
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li>

          </li>
          <li className="nav-item">
            <Switch className="nav-link active py-3 border-bottom bg-dark">
                <Link to="/home"><GiBirdHouse size="40"/></Link>
            </Switch>
          </li>
          <li  className="nav-item">
            <Switch className="nav-link active py-3 border-bottom bg-dark">
              <Link to="user-profile"><CgProfile size="30"/></Link>
            </Switch>
          </li>
          <li className="nav-item">
            <Switch className="nav-link active py-3 border-bottom bg-dark">
              <Link to="/bird-entry"><img className="logo" src={addFinch} fill="white" height="30px" width="30px" color="white"/></Link>
            </Switch>
          </li>
          <li className="nav-item">
            <Switch className="nav-link active py-3 border-bottom bg-dark">
              <Link to="/BirdProfile"><FaKiwiBird size="30"/></Link>
            </Switch>
          </li>
          <li className="nav-item logout">
            <Switch className="nav-link active py-3 border-bottom bg-dark">
              <Link to="/login"><AiOutlineLogout size="30"/></Link>
            </Switch>
          </li>
        </ul>
        <div className="dropdown border-top">

        </div>
      </div>
    </div>
    </IconContext.Provider>
  )
}

export default NavBar;