import React, { useState, createContext, useEffect } from 'react';
import { HashRouter as Router, Switch, Route, Link, useHistory, Redirect } from "react-router-dom";
let firebase = require('firebase/app');
import { firebaseConfig } from '/client/components/Login/firebase.config.js';

// SHARED COMPONENTS
import NavBar from './Shared/NavBar.jsx';

//PAGE COMPONENTS
import Homepage from './Homepage/Homepage.jsx';
import Login from './Login/Login.jsx';
import SignUp from './Login/SignUp.jsx';
import Profile from './Profile/Profile.jsx'
import BirdEntry from './Bird-Entries/BirdEntry.jsx'
import BirdProfile from './Bird-Profile/BirdProfile.jsx'

firebase.default.initializeApp(firebaseConfig);

export const AuthContext = React.createContext(null);

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const history = useHistory();

  useEffect(() => {
    console.log('state update rerender');
  }, [isLoggedIn])

  const redirect = () => {
    history.push('/home')
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn, currentUser, setCurrentUser }}>
      Is logged in? {JSON.stringify(isLoggedIn)}
      <div className="main-container">
        <Router>
          {isLoggedIn && <NavBar />}
          <div className="page-container">
            <Route>
              <Route exact path="/">
                <Redirect to="/login" />
              </Route>
              <Route exact path="/login">
                <Login setCurrentUser={setCurrentUser} />
              </Route>
              <Route exact path="/signup">
                <SignUp setCurrentUser={setCurrentUser} />
              </Route>
              <Route exact path="/home">
                <Homepage currentUser={currentUser} />
              </Route>
              <Route path="/user-profile">
                <Profile currentUser={currentUser} />
              </Route>
              <Route path="/bird-entry">
                <BirdEntry currentUser={currentUser} />
              </Route>
              <Route path="/BirdProfile">
                <BirdProfile currentUser={currentUser} />
              </Route>
            </Route>
          </div>
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;