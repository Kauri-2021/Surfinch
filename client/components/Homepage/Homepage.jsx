import React, { useState, useEffect } from 'react';
import { Switch, Link } from 'react-router-dom';
import axios from 'axios';

import Avatar from '../Shared/Avatar.jsx';
import NavBar from '../Shared/NavBar.jsx';
import Map from '../Shared/Map.jsx';
import LocalBirds from './LocalBirds.jsx';
import Rankings from '../Shared/Rankings.jsx';
import { EBIRD_TOKEN } from '/config';
import { createClient } from 'pexels';


const Homepage = ({ currentUser, location, allBirds }) => {

  const [top10Birds, setTop10Birds] = useState([]);
  const [top10Loc, setTop10Loc] = useState([]);
  const [birdEntries, setBirdEntries] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [ranks, setRanks] = useState([]);

  //
  // const propz = useSpring({
  //   to: { opacity: 1, marginTop: 0 },
  //   from: { opacity: 0, marginTop: 150 },
  //   config: { duration: 2000 },
  //   reset: true,
  //   // delay: 1500,
  // })

  useEffect(() => {
    axios.get(`https://api.ebird.org/v2/data/obs/geo/recent?lat=${parseFloat(location.lat)}&lng=${parseFloat(location.lng)}&sort=date`, {
      headers: {
        'X-eBirdApiToken': EBIRD_TOKEN
      }
    })
      .then((result) => {
        let top10 = result.data.slice(0, 10);
        setTop10Birds(top10);
        console.log(top10);
        let temp = [];
        top10.map((bird) => {
          temp.push({
            speciesCode: bird.speciesCode,
            comName: bird.comName,
            sciName: bird.sciName,
            locId: bird.locId,
            locName: bird.locName,
            obsDt: bird.obsDt,
            howMany: bird.howMany,
            coordinates: [bird.lat, bird.lng],
            obsValid: bird.obsValid,
            obsReviewed: bird.obsReviewed,
            locationPrivate: bird.locationPrivate,
            subId: bird.subId,
            pic: ''
          });
        })
        setTop10Loc(temp);
        setTimeout(() => {
          setLoaded(true);
        }, 2000)
      })
      .catch((err) => {
        console.log('wah', err);
      })
  }, [location])

  useEffect(() => {
    axios.get(`/entries/${currentUser.userID}`)
      .then((res) => {
        console.log('wooo', res.data)
        let temp2 = [];
        res.data.map((entry) => {
          temp2.push({
            bird_name: entry.bird,
            bird_notes: entry.notes,
            bird_pics: entry.birdpic_url,
            coordinates: [parseFloat(entry.latitude), parseFloat(entry.longitude)]
          })
        })
        setBirdEntries(temp2);
      })
      .catch((err) => {
        console.log('nooo', err)
      })
  }, [currentUser])


  useEffect(() => {
    axios.get(`/rankings`)
      .then((results) => {
        var rankings = results.data;
        console.log('Ranks: ', rankings);
        setRanks(rankings);
      })
      .catch((error) => {
        console.log('error fetching rankings: ', error);
      });
  }, []);


  return (
    <div className="home-container">
      <div className="mini-home-container">
        <div className="mini-profile-container">
          <div className="usericon topbirdersicon">
            <Switch>
              <Link to="/user-profile">
                <Avatar size={75} color={currentUser.avatar_background || '#c8994d'}
                  avatar_pic={currentUser.avatar_pic || 'crane'} />
              </Link>
            </Switch>
          </div>
          <div className="welcome-banner">
            <h1>Welcome, {currentUser.username}!</h1>
            <h3>Thanks for flyin in today!</h3>
          </div>
          <div className="bird-of-day">
            <h2>Bird of the day</h2>
            <img src={"https://images.unsplash.com/photo-1611871917387-5bc92bc0b0d8?ixid=MnwxMjA3fDB8MHxzZWFy[…]b3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"} width="200px" height="250px" alt="bird pic lol"></img>
            <h4>Ceader Waxwing</h4>
          </div>
        </div>
        <div className="mini-map-container">
          {loaded ? <div className="mini-map-container">
            <Map styleWidth={40} styleHeight={40} defaultCenter={{ lat: parseFloat(location.lat), lng: parseFloat(location.lng) }} defaultZoom={7} localBirdsMarkers={top10Loc} userMarkers={birdEntries} />
            <div className="birds-nearby-container">
              <LocalBirds top10Birds={top10Birds} location={location} />
            </div>
          </div> : <div className="loading"> <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>  </div>}
        </div>
      </div>
          <Rankings rankings={ranks} currentUser={currentUser} />
    </div>
  )
}

      export default Homepage;