import React, { useState, useEffect } from 'react';
import Avatar from '../Shared/Avatar.jsx';
import NavBar from '../Shared/NavBar.jsx';
import Map from '../Shared/Map.jsx';

const Homepage = (props) => {
  var fakeData = [{ pic: 'URL', name: 'Parrot' }, { pic: 'URL', name: 'Crane' }, { pic: 'URL', name: 'Eagle' }];

  //PROPS.CURRENTUSER WILL HAVE LOTS OF INFO 4 U

  return (
    <div className="home-container">
      <div className="mini-home-container">
        <div className="mini-profile-container">
        <div className="usericon topbirdersicon">
        <Avatar className="usericon topbirdersicon" size={75} color='#c8994d' />
        </div>
          <h2>Welcome, Mr. Raymonds! Thanks for flyin in today!</h2>
          <div>more info go here</div>
        </div>
        <div className="mini-map-container">
          <Map styleWidth={60} styleHeight={40} />
        </div>
        </div>
        <div className="mini-info-container">
          <h3 className="toptitle">TOP BIRD WATCHERS</h3>
          <div className="topbirdersicon">
            <Avatar size={75} color='#c8994d' />
          </div>
          <div className="descriptiontag1">Mr. Raymonds</div>
          <div className="topbirdersicon">
            <Avatar size={75} color='#c8994d' />
          </div>
          <div className="descriptiontag2">Smitty</div>
          <div className="topbirdersicon">
            <Avatar size={75} color='#c8994d' />
          </div>
          <div className="descriptiontag3">Regionald</div>
        </div>
    </div>
  )
}

export default Homepage;

/*
<div><Map styleWidth={50} styleHeight={50} userMarkers={sampleFriendData} heatMap={heatData}/></div>

const sampleFriendData = [{
    bird_name: "red bird",
    bird_notes: "looks cool",
    bird_pics: "string",
    coordinates: [32.822376, -96.807374]
  },
  {
    bird_name: "blue bird",
    bird_notes: "has blue wings",
    bird_pics: "string",
    coordinates: [32.820989, -96.791009]
  }];

  const heatData = [[32.7769, -96.7970], [32.7767, -96.7970], [32.7790, -96.7970], [32.7794, -96.7970]];
*/