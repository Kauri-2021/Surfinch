import React, { useState, createContext, useEffect } from 'react';
import { HashRouter as Router, Switch, Route, Link, useHistory, Redirect } from "react-router-dom";
let firebase = require('firebase/app');
import { firebaseConfig } from '/client/components/Login/firebase.config.js';
import axios from 'axios';
import { LOC_TOKEN } from '/config';
import { EBIRD_TOKEN } from '/config.js';

// SHARED COMPONENTS
import NavBar from './Shared/NavBar.jsx';

//PAGE COMPONENTS
import Homepage from './Homepage/Homepage.jsx';
import Login from './Login/Login.jsx';
import SignUp from './Login/SignUp.jsx';
import Profile from './Profile/Profile.jsx';
import BirdEntry from './Bird-Entries/BirdEntry.jsx';
import BirdProfile from './Bird-Profile/BirdProfile.jsx';
import regions from './Shared/RegionCode.js';
import UpdateBirdForm from './Bird-Entries/UpdateBirdForm.jsx'

firebase.default.initializeApp(firebaseConfig);

export const AuthContext = React.createContext(null);

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [birdEntries, setBirdEntries] = useState([]);
  const [location, setLocation] = useState({});
  const [allBirds, setAllBirds] = useState([]);
  const [birdRequest, setBirdRequest] = useState({});
  const [entries, setEntries] = useState([]);
  const [individualBird, setIndividualBird] = useState({});

  const history = useHistory();
  // const [currentUser, setCurrentUser] = useState({ 'userId': 1, 'email': 'email@admin.com', 'name': 'Admin', pic: '' })

  console.log('location object', location)
  console.log('bird request', birdRequest)
  // console.log('ohhhh currentUser', currentUser)

  //LOCATION IQ API CALL for lats/longs and region codes
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {

      var lat = position.coords.latitude.toString();
      var lng = position.coords.longitude.toString();

      axios.get(`https://us1.locationiq.com/v1/reverse.php?key=${LOC_TOKEN}&lat=${lat}&lon=${lng}&format=json`)
        .then(results => {
          setLocation({
            'street': results.data.address.house_number + " " + results.data.address.road,
            'city': results.data.address.city,
            'state': regions[results.data.address.state],
            'lat': lat,
            'lng': lng
          })
        })
        .catch(error => { console.log(error); });
    });
    currentUser && axios.get(`/entries/${currentUser.userID}`)
      .then(results => { setBirdEntries(results.data); })
  }, [currentUser]);

  //EBIRD API CALL for list of every single mfing bird in existence
  useEffect(() => {
    axios.get(`https://api.ebird.org/v2/ref/taxonomy/ebird?locale=en&fmt=json`, {
      headers: {
        'X-eBirdApiToken': EBIRD_TOKEN
      }
    })
      .then((result) => {
        // console.log('all birds api call', result.data);
        setAllBirds(result.data)
      })
      .catch(error => { console.log('There was an error retrieving data from API, ', error); })
  }, [])


  //login & redirect (routing things)
  useEffect(() => {
    console.log('state update rerender');
  }, [isLoggedIn])

  useEffect(() => {
    console.log('state update rerender');
  }, [currentUser])


  const redirect = () => {
    history.push('/home')
  }



  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn, currentUser, setCurrentUser, birdEntries, setBirdEntries, birdRequest, setBirdRequest, individualBird, setIndividualBird, allBirds }}>
      <div className="boolean">
      </div>
      <div className="main-container">
        <Router>
          {isLoggedIn && <NavBar />}
          <div className="big-page-container">
            {!isLoggedIn ?
              <div className="unidentified-container">
                <Route exact path="/">
                  <Redirect to="/login" />
                </Route>
                <Route exact path="/login">
                  <Login setCurrentUser={setCurrentUser} />
                </Route>
                <Route exact path="/signup">
                  <SignUp setCurrentUser={setCurrentUser} />
                </Route>
              </div> :
              <Route>
                <div className="page-container">
                  <Route exact path="/home">
                    <Homepage currentUser={currentUser} location={location} allBirds={allBirds} />
                  </Route>
                  <Route path="/user-profile">
                    <Profile currentUser={currentUser} location={location} />
                  </Route>
                  <Route path="/bird-entry">
                    <BirdEntry currentUser={currentUser} location={location} />
                  </Route>
                  <Route path="/update-bird-form">
                    <UpdateBirdForm currentUser={currentUser} location={location} />
                  </Route>
                  <Route path="/BirdProfile">
                    <BirdProfile currentUser={currentUser} birdRequest={birdRequest} />
                  </Route>
                </div>
              </Route>
            }
          </div>
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;