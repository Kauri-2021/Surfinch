import React, { useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
import HeatmapLayer from "react-google-maps/lib/components/visualization/HeatmapLayer";
import { GOOGLE_TOKEN } from "../../../config.js";


const DisplayMap = (props) => {
  const [selectedBird, setSelectedBird] = useState(null);

  const currentZoom = props.props.zoom;
  const currentCenter = props.props.center;
  const currentUserData = props.props.userData;
  const currentFriendData = props.props.friendData;
  const currentLocalBirdsData = props.props.localBirdsData;
  const currentHeatMap = props.props.heatmapLayer;


  // console.log(currentLocalBirdsData);

  return (
    <GoogleMap
      defaultZoom={props.props.zoom}
      defaultCenter={currentCenter}>
        { currentUserData &&
        currentUserData.map((bird, index) => (
        <Marker
        key={index}
        position={{
          lat: bird.coordinates[0],
          lng: bird.coordinates[1]
        }}
        onClick={() => {
          setSelectedBird(bird);
        }}
        icon={{
          url: 'assets/pin.svg',
          scaledSize: new window.google.maps.Size(25, 25)
        }}
        />
        ))}
        {currentFriendData &&
        currentFriendData.map((bird, index) => (
        <Marker
        key={index}
        position={{
          lat: bird.coordinates[0],
          lng: bird.coordinates[1]
        }}
        onClick={() => {
          setSelectedBird(bird);
        }}
        icon={{
          url: 'assets/group.svg',
          scaledSize: new window.google.maps.Size(25, 25)
        }}
        />
        ))}
        {currentLocalBirdsData &&
        currentLocalBirdsData.map((bird, index) => (
        <Marker
        key={index}
        position={{
          lat: bird.coordinates[0],
          lng: bird.coordinates[1]
        }}
        onClick={() => {
          setSelectedBird(bird);
        }}
        icon={{
          url: 'assets/localBirdRed.svg',
          scaledSize: new window.google.maps.Size(25, 25)
          // path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
          //       scale: 5,
          //       strokeWeight: 2,
          //       fillColor: '#009933',
          //       fillOpacity: 1,
          //       rotation: 0
        }}
        />
        ))}
      {selectedBird && (
        <InfoWindow position={{
          lat: selectedBird.coordinates[0],
          lng: selectedBird.coordinates[1]
        }}
        onCloseClick={() => {
          setSelectedBird(null);
        }}
        >
          <div>bird details
            {selectedBird.bird_name && <h2>{selectedBird["bird_name"]}</h2>}
           {selectedBird.bird_notes &&  <p>{selectedBird["bird_notes"]}</p>}
           {selectedBird.bird_pics &&  <div><img src={selectedBird["bird_pics"]} alt="bird pic" width="70" height="70" /></div>}
           {selectedBird.comName &&  <h2>{selectedBird["comName"]}</h2>}
           {selectedBird.sciName &&  <p>Scientific Name: {selectedBird["sciName"]}</p>}
           {selectedBird.locName &&  <p>Location: {selectedBird["locName"]}</p>}
           {selectedBird.howMany &&  <p>How many seen: {selectedBird["howMany"]}</p>}
          </div>
        </InfoWindow>
      )}
      {currentHeatMap &&
      <HeatmapLayer
      data={currentHeatMap.map((point) => (
        new google.maps.LatLng(point[0], point[1])
      ))}
      />
      }
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(props => (<DisplayMap props={props}/>)));

const Map = (props) => {

  const defaultZoom = props.defaultZoom || 5;
  const defaultCenter = props.defaultCenter || { lat: 39.8283, lng: -98.5795 };
  const userMarkers = props.userMarkers || null;
  const friendMarkers = props.friendMarkers || null;
  const localBirdsMarkers = props.localBirdsMarkers || null;
  const heatMap = props.heatMap || null;
  const styleWidth = props.styleWidth || 100;
  const styleHeight = props.styleHeight || 100;


  return (
    <div style={{ width: `${styleWidth}vw`, height: `${styleHeight}vh` }}>
      <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,visualization,drawing,places&key=${GOOGLE_TOKEN}`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
        zoom={defaultZoom}
        center={defaultCenter}
        userData={userMarkers}
        friendData={friendMarkers}
        localBirdsData={localBirdsMarkers}
        heatmapLayer={heatMap}
      />
    </div>
  )
}

export default Map;

/*
Props formatting:
styleWidth: integer - enter the vw of the map (just enter the number)-- default is 100
styleHeight: integer - enter the vh of the map (just enter the number)-- default is 100
defaultZoom: number - the higher the number the more zoomed in -- default is 5
defaultCenter: -object - { lat: integer, lng: integer } - default: { lat: 32.7767, lng: -96.7970 }
userMarker: array of objects [{
  bird_name: string,
  bird_notes: string,
  bird_pics: string,
  coordinates: [lat(int), long(int)]
},
{
  bird_name: string,
  bird_notes: string,
  bird_pics: string,
  coordinates: [lat(int), long(int)]
}]

friendMarkers: array of objects [{
  friend_name: text,
  bird_name: string,
  bird_notes: string,
  bird_pics: string,
  coordinates: [lat(int), long(int)]
},
{
  friend_name: text,
  bird_name: string,
  bird_notes: string,
  bird_pics: string,
  coordinates: [lat(int), long(int)]
}]

localBirdsMarker :  array of objects [{
  speciesCode: text,
  comName: text,
  sciName: text,
  locId: int,
  locName: text
  obsDt: text,
  howMany: int,
  coordinates: [lat(int), long(int)],
  obsValid: bool,
  obsReviewed: bool,
  locationPrivate: bool,
  subId: text
}]

heatMap: array of arrays:
[[lat, lng], [lat, lng], [lat, lng]]



example:

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

  const sample locbirddata = [
    {
        speciesCode: "rthhum",
        comName: "Ruby-throated Hummingbird",
        sciName: "Archilochus colubris",
        locId: "L9682819",
        locName: "7211 McKamy Boulevard, Dallas, Texas, US (32.984, -96.782)",
        obsDt: "2021-09-01 17:36",
        howMany: 1,
        coordinates: [32.9836112, -96.7820043],
        obsValid: true,
        obsReviewed: false,
        locationPrivate: true,
        subId: "S94050257"
    },
    {
        speciesCode: "yebcuc",
        comName: "Yellow-billed Cuckoo",
        sciName: "Coccyzus americanus",
        locId: "L1935350",
        locName: "Back Yard",
        obsDt: "2021-09-01 14:45",
        howMany: 1,
        coordinates: [32.8006406, -96.7647243],
        obsValid: true,
        obsReviewed: false,
        locationPrivate: true,
        subId: "S94044366"
    },
    {
        speciesCode: "eursta",
        comName: "European Starling",
        sciName: "Sturnus vulgaris",
        locId: "L16065128",
        locName: "El Centro Campus Dallas College",
        obsDt: "2021-09-01 10:48",
        howMany: 1,
        coordinates: [32.7802336, -96.8061208],
        obsValid: true,
        obsReviewed: false,
        locationPrivate: true,
        subId: "S94032980"
    }]
  const heatData = [[32.7769, -96.7970], [32.7767, -96.7970], [32.7790, -96.7970], [32.7794, -96.7970]];

<div><Map styleWidth={50} styleHeight={50} userMarkers={sampleFriendData} heatMap={heatData}/></div>
*/