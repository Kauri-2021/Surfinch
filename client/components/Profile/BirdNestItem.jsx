import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../App.jsx';
import Region from '../Shared/RegionCode.js';

const BirdNestItem = ({ bird }) => {
  const Auth = useContext(AuthContext);
  let history = useHistory();

  var speciesCode;
  var regionCode;
  var commonName;
  var scientific;

  const getBirdFormData = () => {
    console.log('Searched');
    const isThere = (entry) => entry.comName.toLowerCase().includes(bird.bird.toLowerCase().replace(' ', ''));
    var index = Auth.allBirds.findIndex(isThere);

    if (index < 0) {
      index = 7;
    }

    speciesCode = Auth.allBirds[index].speciesCode;
    commonName = Auth.allBirds[index].comName;
    scientific = Auth.allBirds[index].sciName;
    regionCode = Region[bird.state_sighted];
  }

  getBirdFormData();

  const handleBird = (e) => {
    Auth.setIndividualBird(bird);
    history.push('/update-bird-form');
  }

  const sendBird = () => {
    Auth.setBirdRequest({
      regionCode: regionCode,
      speciesCode: speciesCode,
      commonName: commonName,
      scientific: scientific,
      pic: bird.birdpic_url,
      notes: bird.notes
    });
    history.push('/BirdProfile');
  }

  return (
    <div className='bird-nest-item' >
      <div className="card">
        <img src={bird.birdpic_url} className="card-img-top" alt="..." onClick={sendBird}></img>
        <div className="card-body">
          <h5 className="card-title">{bird.bird}</h5>
          <small className="card-text">{bird.state_sighted}</small>
          <button onClick={handleBird} className="editBtn">Edit</button>
          <div class="hoverBtn"></div>
          <div class="hoverBtn-bottom"></div>
        </div>
      </div>
    </div>
  );

}

export default BirdNestItem;