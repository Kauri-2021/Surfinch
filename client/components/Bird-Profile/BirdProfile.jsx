import React, { useState, useEffect } from 'react';
import { createClient } from 'pexels';
import axios from 'axios';
import Map from '.././Shared/Map.jsx';
import { compileCoordinates } from './coordinates.js';
import { GOOGLE_TOKEN } from '../../../config.js';
import { EBIRD_TOKEN } from '../../../config.js';
import { PIXEL_TOKEN } from '../../../config.js';
import { FaAngleRight } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa';

const BirdProfile = (props) => {
  const [bird, setBird] = useState([]);
  const [location, setLocation] = useState([]);
  const [notes, setNotes] = useState([]);
  const [pictures, setPics] = useState("");
  const [taxonomy, setTax] = useState('');
  //boolean flag indicators **************
  const [show, setShow] = useState(false);
  const [photo, setPhoto] = useState(true);
  const [map, setMap] = useState(false);
  const [button, setButton] = useState(false);

  const regionCode = props.birdRequest.region || "RI";
  const speciesCode = props.birdRequest.species || "cangoo";
  const commonName = props.birdRequest.commonName || "canada goose";
  const scientific = props.birdRequest.scientific || "Branta canadensis";
  const pic = props.birdRequest.photos || 'https://t3.ftcdn.net/jpg/03/53/78/32/360_F_353783241_kJr5np3yVR0hgzMsgON96DmqRkcMIoRs.jpg';
  const note = props.birdRequest.notes || 'No notes for this bird watcher!';
  // const user = props.userID || 1;

  //pexel api call
  const client = createClient(PIXEL_TOKEN);
  const query = commonName || scientific;
  client.photos.search({ query, per_page: 1 }).then(photos => {
    console.log('pexel photos, ', photos.photos[0].src.large)
    setPics(photos.photos[0].src.large);
  });


  // //get recent observation of bird
  useEffect(() => {
    axios.get(`https://api.ebird.org/v2/data/obs/US-${regionCode}/recent/${speciesCode}`, {
      headers: {
        'X-eBirdApiToken': EBIRD_TOKEN
      }
    })
      .then((result) => {
        var result2 = compileCoordinates(result.data);
        // console.log('lats and longs', result2)
        setLocation(result2);
        setBird(result.data);
      })
      .catch(error => { console.log('There was an error retrieving data from API, ', error); })
  }, [])

  //get bird info
  useEffect(() => {
    var url = "https://en.wikipedia.org/w/api.php";
    var params = {
      action: "query",
      list: "search",
      srsearch: `${scientific}`,
      format: "json"
    };
    url = url + "?origin=*";
    Object.keys(params).forEach(function (key) { url += "&" + key + "=" + params[key]; });
    axios.get(url)
      .then((result) => {
        var data = result.data.query.search[0].snippet
        var text = data.replace(/(<([^>]+)>)/ig, '')
        setTax(text);
      })
      .catch((error) => { console.log('error from Wiki api', error) });
  }, [])


  const handleClick = (event) => {
    event.preventDefault();
    setShow(!show);
    setPhoto(false);
    setMap(false);
  }

  const handleMap = (event) => {
    event.preventDefault();
    setMap(!map)
    setShow(false);
    setPhoto(false)
  }

  const handlePhoto = (event) => {
    event.preventDefault();
    setPhoto(true);
    setMap(false)
    setShow(false);
    setButton(!button);
  }

  if (pictures === undefined) {
    // console.log('true pictures has no length!')
    setPics('https://t3.ftcdn.net/jpg/03/53/78/32/360_F_353783241_kJr5np3yVR0hgzMsgON96DmqRkcMIoRs.jpg')
  }

  return (
    <div className='birdProfileContainer'>
      <div className='birdBio'>
        <h1 className='birdTitle'>{commonName}</h1>
        <h3 className='scientific'><em>{scientific}</em> </h3>
        <small>| General Information |</small>
        <div className='paragraphBird'>
          {taxonomy ? <p>{taxonomy}...click here for more</p> : null}
        </div>
      </div>
      <div className="secondRowBP">
        <div className="buttonSquad">
          {!show ?
            <button className='downButton' onClick={event => handleClick(event)}>Notes <FaAngleRight size="25px" /></button> : <button className='downButton' onClick={event => handleClick(event)}>Notes <FaAngleLeft size="25px" /></button>}
          {!map ?
            <button className="downButton" onClick={event => handleMap(event)}>Heat Map <FaAngleRight size="25px" /></button> : <button className="downButton" onClick={event => handleMap(event)}>Heat Map <FaAngleLeft size="25px" /></button>}
          {!button ?
            <button className="downButton" onClick={event => handlePhoto(event)}>Photo <FaAngleRight size="25px" /></button> : <button className="downButton" onClick={event => handlePhoto(event)}>Photo <FaAngleLeft size="25px" /></button>}
        </div>
        <div className="viewer">
          {photo ? <div className='birdProfilePic'>
            <img src={pictures} alt="canada goose"></img>
          </div> : null}
          {map ? <div className='heatMap'>
            <Map styleHeight={40} styleWidth={40} defaultZoom={ 7 } defaultCenter={{ lat: location[0][0], lng: location[0][1] }} heatMap={location} />
          </div> : null}
          {show ? <div className="birdNotes">
            <h4 className='notesTitle'> My Notes</h4>
            <hr className="dash"></hr>
            <p className='notesText'>{note}</p>
          </div> : null}
        </div>
      </div>
    </div>
  );
}

export default BirdProfile;


