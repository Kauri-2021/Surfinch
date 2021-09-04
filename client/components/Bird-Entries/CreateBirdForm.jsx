import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LOC_TOKEN } from '/config.js';
import BirdEntryList from './BirdEntryList.jsx';
import SearchBar from './SearchBar.jsx';

const CreateBirdForm = ({ currentUser, location }) => {
  const [birdEntries, setBirdEntries] = useState([]);
  const [searchBar, setSearchBar] = useState('');
  const [filteredSet, setFilteredSet] = useState([]);

  const [species, setSpecies] = useState('');
  const [date, setDate] = useState();
  const [fileUpload, setFileUpload] = useState('');

  const [notes, setNotes] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [st, setSt] = useState('');

  useEffect(() => {
    if (location) {
      setStreet(location.street);
      setCity(location.city);
      setSt(location.state);
    }

      var lat = location.lat.toString();
      var lon = location.lng.toString();

      axios.get(`https://us1.locationiq.com/v1/reverse.php?key=${LOC_TOKEN}&lat=${lat}&lon=${lon}&format=json`)
        .then(results => {
          console.log('fsdfk', results.data)
          setStreet(results.data.address.house_number + " " + results.data.address.road);
          setCity(results.data.address.city);
          setSt(results.data.address.state);
        })
        .catch(error => { console.log(error); });

    axios.get(`/entries/${currentUser.userID}`)
      .then(results => { setBirdEntries(results.data); setFilteredSet(results.data) })
  }, []);

  var handleSearchBarChange = (event) => {
    console.log(event.target.value)
    var value = event.target.value;
    var pattern = new RegExp(`\^${value}`, 'i');

    var filteredResults = birdEntries.filter(function (value) {
      return pattern.test(value.bird) || pattern.test(value.city_sighted) || pattern.test(value.state_sighted);
    })
    setFilteredSet(filteredResults);

    // handleInputChange(event, setSpecies);
  }

  var handleSubmit = (event) => {
    event.preventDefault();
    var form = document.getElementById('create-entry')
    var formData = new FormData(form);
    axios.get(`https://us1.locationiq.com/v1/search.php?key=${LOC_TOKEN}&city=${city}&state=${st}&format=json`)
      .then(results => {
        var lat = results.data[0].lat;
        var lon = results.data[0].lon;
        formData.append('latitude', lat);
        formData.append('longitude', lon);
        formData.append('userID', currentUser.userID);
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
          .catch(err => { if (err) console.log(err) })
      })
      .then(() => {
        axios.get(`/entries/${currentUser.userID}`)
          .then(results => { setBirdEntries(results.data); setFilteredSet(results.data) })
          .catch(err => { if (err) console.log(err) })
      })
      .then(() => {
        setNotes('');
        setSpecies('');
        setDate('');
      })
      .catch(err => { if (error) console.log(err); });

  }

  var handleFileUpload = (event) => {
    setFileUpload(event.target.files[0]);
  }

  var handleInputChange = (event, key) => {
    key(event.target.value);
  }

  var handleCardClick = (event) => {
    var value = event.target.getAttribute('data-birdname');
    setSpecies(value);
  }

  return (
    <div className="container d-flex flex-column justify-content-center" id="bird-entry-container">
      <h3 className="entryFormTitle">Seen A New Bird? Enter It To Your List</h3>
      <div>
        <SearchBar handleSearchBarChange={handleSearchBarChange} />
        <BirdEntryList birdEntries={filteredSet} handleCardClick={handleCardClick} />

        <form id="create-entry" onSubmit={handleSubmit}>
          <div className="form-group row align-items-end">
            <div className="form-group col-6">
              <label className="control-label" htmlFor="">Species</label>
              <input className="form-control" type="text" name="bird" value={species} onChange={() => {handleInputChange(event, setSpecies)}} />
            </div>

            <div className="form-group col-6">
              <label className="control-label" htmlFor="">Date</label>
              <input type="date" name="date" className="form-control" value={date} required onChange={() => { handleInputChange(event, setDate) }} />
            </div>
          </div>
          <div className="form-group row align-items-end">
            <div className="form-group col-6">
              <input className="form-control" type="file" name="birdPhoto" id="fileUpload" accept="image/*" onChange={() => { handleFileUpload(event) }} />
            </div>
            <div className="form-group col-6">
              <label className="control-label" htmlFor="">Street</label>
              <input className="form-control" name="street_sighted" type="text" onChange={() => { handleInputChange(event, setStreet) }} value={street} />
            </div>
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
            <textarea className="form-control" name="notes" value={notes} onChange={() => { handleInputChange(event, setNotes) }}></textarea>
          </div>

          <div>
            <input className="btn form-control" type="submit" />
          </div>
        </form >
      </div >
    </div>
  )
};

export default CreateBirdForm;