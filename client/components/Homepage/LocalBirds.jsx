import React, { useContext } from 'react';
import { Switch, Link } from 'react-router-dom';
import { AuthContext } from '../App.jsx';

const LocalBirds = ({top10Birds}) => {

  const Auth = useContext(AuthContext);

  console.log('auth', Auth);


  return (
    <>
      {top10Birds.map((bird) => {
        return (
          <div className="local-bird" onClick={() => {setBirdRequest({speciesCode: bird.speciesCode, commonName: bird.comName, commonName: bird.comName, scientific: bird.sciName, pic: bird.pic})}}>
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