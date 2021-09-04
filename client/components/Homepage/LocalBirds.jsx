import React, { useContext } from 'react';
import { Switch, Link } from 'react-router-dom';
import { AuthContext } from '../App.jsx';
import regions from '../Shared/RegionCode.js';

const LocalBirds = ({top10Birds, location}) => {

  const Auth = useContext(AuthContext);

  console.log('auth', Auth);


  return (
    <>
      <h5>Birds in your area</h5>
      {top10Birds.map((bird, i) => {
        return (
          <div key={i} className="local-bird" onClick={() => {Auth.setBirdRequest({regionCode: regions[location.state], speciesCode: bird.speciesCode, commonName: bird.comName, commonName: bird.comName, scientific: bird.sciName, pic: bird.pic})}}>
             <a>
               <Switch><Link to="/birdProfile">
                 <p className="toobig">{bird.comName}</p>
                 <p className="smol"><i>({bird.sciName})</i></p>
               </Link></Switch>
              </a>
          </div>
        )
      })}
    </>
  )
}

export default LocalBirds;