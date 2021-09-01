import React, { useState, useEffect } from 'react';
import axios from 'axios';

import BirdEntryList from './BirdEntryList.jsx';
import SearchBar from './SearchBar.jsx';

const CreateBirdForm = () => {
  const [birdEntries, setBirdEntries] = useState([]);
  const [searchBar, setSearchBar] = useState('');
  const [filteredSet, setFilteredSet] = useState([]);

  const [species, setSpecies] = useState('');
  const [fileUpload, setFileUpload] = useState();

  const [notes, setNotes] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [st, setSt] = useState('');

  var auth = 'pk.d7d064c84a94d6bb8ce9a8fbca7cc4d0';

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {

      var lat = position.coords.latitude.toString();
      var lon = position.coords.longitude.toString();

      axios.get(`https://us1.locationiq.com/v1/reverse.php?key=${auth}&lat=${lat}&lon=${lon}&format=json`)
        .then(results => {
          setStreet(results.data.address.house_number + " " + results.data.address.road);
          setCity(results.data.address.city);
          setSt(results.data.address.state);
        })
        .catch(error => { console.log(error); });

    });
    axios.get('/entries')
      .then(results => { setBirdEntries(results.data); setFilteredSet(results.data) })
  }, []);

  var handleSearchBarChange = (event) => {
    var value = event.target.value;
    // setSearchBar(event.target.value);
    var pattern = new RegExp(`\^${value}`, 'i');

    var filteredResults = birdEntries.filter(function (value) {
      return pattern.test(value.bird)
    })
    setFilteredSet(filteredResults);
  }

  var handleSubmit = (event) => {
    event.preventDefault();
    var form = document.getElementById('create-entry')
    var formData = new FormData(form);
    axios.get(`https://us1.locationiq.com/v1/search.php?key=${auth}&city=${city}&state=${st}&format=json`)
      .then(results => {
        var lat = results.data[0].lat;
        var lon = results.data[0].lon;
        console.log(lat, lon)
        formData.append('latitude', lat);
        formData.append('longitude', lon);
        if (fileUpload) {
          formData.append(
            "birdImage",
            fileUpload,
            fileUpload.name
          );
          formData.append('birdpic_url', `/uploads/${fileUpload.name}`);
        }
      })
      .then(() => {
        axios.post('/createBird', formData)
          .then(results => { console.log(formData) })
          .catch(error => { if (error) console.log(error); });
      })
      .then(() => {
        axios.get('/entries')
          .then(results => { setBirdEntries(results.data) })
          .then(results => { setFilteredSet(results.data) })
      })
      .catch(error => { if (error) console.log(error); });
  }

  var handleFileUpload = (event) => {
    setFileUpload(event.target.files[0]);
  }

  var handleInputChange = (event, key) => {
    key(event.target.value);
  }

  return (
    <div className="container" id="bird-entry-container">
      <SearchBar handleSearchBarChange={handleSearchBarChange} />

      <form id="create-entry" onSubmit={handleSubmit}>
        <div className="form-group row align-items-end">
          <div className="col-6">
            <label className="control-label" htmlFor="">Species</label>
            <input className="form-control" type="text" name="bird" onChange={() => { handleInputChange(event, setSpecies) }} />
          </div>

          <div className="col-6">
            <input className="form-control" type="file" name="birdPhoto" id="fileUpload" accept="image/*" onChange={() => { handleFileUpload(event) }} />
          </div>
        </div>

        <div className="form-group">
          <label className="control-label" htmlFor="">Street</label>
          <input className="form-control" type="text" onChange={() => { handleInputChange(event, setStreet) }} value={street} />
        </div>

        <div className="form-group row">
          <div className="col-6">
            <label className="control-label" htmlFor="">City</label>
            <input className="form-control" type="text" name="city_sighted" onChange={() => { handleInputChange(event, setCity) }} value={city} />

          </div>
          <div className="col-6">
            <label className="control-label" htmlFor="">State</label>
            <input className="form-control" type="text" name="state_sighted" onChange={() => { handleInputChange(event, setSt) }} value={st} />

          </div>
        </div>

        <div className="form-group">
          <label className="control-label" htmlFor="">Notes</label>
          <textarea className="form-control" name="notes" onChange={() => { handleInputChange(event, setNotes) }}></textarea>
        </div>


        <div>
          <input className="form-control" type="submit" />
        </div>
      </form >

      <BirdEntryList birdEntries={filteredSet} />
    </div>

  )
};

export default CreateBirdForm;