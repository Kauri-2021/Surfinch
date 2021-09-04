import React, { useState, useEffect } from 'react';
import { Switch, Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { CgProfile } from 'react-icons/cg';
import { GiBirdHouse, GiKiwiBird } from 'react-icons/gi';
import { FaKiwiBird } from 'react-icons/fa';
import { AiOutlineLogout } from 'react-icons/ai';
import addFinch from '../../../public/img/converted-addFinch-01 copy.svg';
import firebase from 'firebase';
import 'firebase/auth';

const NavBar = (props) => {

  const logout = () => {
    firebase.auth().signOut().then(() => {
      console.log('sign out successful')
    }).catch((error) => {
      console.log('logout error', error);
    });
  }

  return (
    <IconContext.Provider value={{ color: "white" }}>
      <div className="nav-container d-flex">
        <div className="d-flex flex-column flex-shrink-0 " style={{ width: "4.5rem" }}>
          <a href="#" className="d-block p-3 link-dark text-decoration-none"></a>
          <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
            <li>
            </li>
            <li className="nav-home" data-toggle="tooltip" data-placement="Tooltip on right" title="HOME">
              <Switch className="nav-link active py-3 border-bottom bg-dark">
                <Link to="/home"><GiBirdHouse size="40" /></Link>
              </Switch>
              {/* <span className="homeNav">HOME</span> */}
            </li>
            <li className="nav-profile" data-toggle="tooltip" data-placement="Tooltip on right" title="PROFILE">
              <Switch className="nav-link active py-3 border-bottom bg-dark">
                <Link to="user-profile"><CgProfile size="30" /></Link>
              </Switch>
            </li>
            <li className="nav-entry" data-toggle="tooltip" data-placement="Tooltip on right" title=" NEW BIRD ENTRY">
              <Switch className="nav-link active py-3 border-bottom bg-dark">
                <Link to="/bird-entry"><img className="logo" src={addFinch} fill="white" height="30px" width="30px" color="white" /></Link>
              </Switch>
            </li>
            {/* <li className="nav-bprofile">
            <Switch className="nav-link active py-3 border-bottom bg-dark">
              <Link to="/BirdProfile"><FaKiwiBird size="30"/></Link>
            </Switch>
          </li> */}
          </ul>
          <div className="dropdown border-top">
            <div className="nav-logout" data-toggle="tooltip" data-placement="Tooltip on right" title="LOG OUT">
              <Switch className="nav-link active py-3 border-bottom bg-dark">
                <Link onClick={logout} to="/login"><AiOutlineLogout size="30" /></Link>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  )
}

export default NavBar;

