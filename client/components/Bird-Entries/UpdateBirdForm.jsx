import React, { useState, useEffect, useContext } from 'react';
import { LOC_TOKEN } from '/config.js';
import axios from 'axios';
import { AuthContext } from '../App.jsx';

const UpdateBirdForm = ({ birdEntry }) => {
  const [species, setSpecies] = useState('');
  const [date, setDate] = useState(new Date());
  const [fileUpload, setFileUpload] = useState('');

  const [notes, setNotes] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [st, setSt] = useState('');


  const Auth = useContext(AuthContext);
  const eachBird = Auth.individualBird;

  useEffect(() => {
    if (eachBird) {
      setSpecies(eachBird.bird);
      setDate(new Date(eachBird.date));
      setNotes(eachBird.notes);
      setStreet(eachBird.street_sighted);
      setCity(eachBird.city_sighted);
      setSt(eachBird.state_sighted);
    }
  }, [birdEntry]);

  var handleFileUpload = (event) => {
    setFileUpload(event.target.files[0]);
  }

  var handleInputChange = (event, key) => {
    key(event.target.value);
  }

  var handleSubmit = (event) => {
    event.preventDefault();

    // var form = document.getElementById('update-entry')
    // var formData = new FormData(form);
    // console.log(formData)
    // axios.get(`https://us1.locationiq.com/v1/search.php?key=${LOC_TOKEN}&city=${city}&state=${st}&format=json`)
    //   .then(results => {
    //     var lat = results.data[0].lat;
    //     var lon = results.data[0].lon;
    //     formData.append('latitude', lat);
    //     formData.append('longitude', lon);
    //     formData.append('id', birdEntry.id);

    //     if (fileUpload) {
    //       formData.append(
    //         "birdImage",
    //         fileUpload,
    //         fileUpload.name
    //       );

    //       formData.append('birdpic_url', `/uploads/${fileUpload.name}`);
    //     }
    //   })
      // .then(() => {

        axios.put('/updateBird', {
          bird: species,
          date: date,
          street_sighted: street,
          city_sighted: city,
          state_sighted: st,
          notes: notes,
          id: eachBird.id
        })
          .then(results => {
            console.log('results from sequel submit', results, event)

          })
          .catch(err => console.log(err, 'in update bird form'))

  }

  return (
    <div className="updateFormContainer">
      <h3 className="updateTitle">Update Bird Entry</h3>
      <div className="updateTwo">
        <form id="update-entry" onSubmit={handleSubmit}>
          <div className="form-group row align-items-end">
            <div className="form-group col-6">
              <label className="control-label" htmlFor="">Species</label>
              <input className="form-control" type="text" name="bird" value={species} onChange={() => { handleInputChange(event, setSpecies) }} />
            </div>

            <div className="form-group col-6">
            {/* <label className="control-label" htmlFor="">Date</label>
            <input type="date" name="date" className="form-control" value={`${date.getFullYear()}-${date.getMonth().toString().length < 2 ? '0' + (parseInt(date.getMonth()) + 1).toString() : (parseInt(date.getMonth()) + 1).toString()}-${date.getDate().toString().length < 2 ? '0' + date.getDate() : date.getDate()}`} required onChange={() => { handleInputChange(event, setDate) }} /> */}
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
      </div>
    </div>

  )
};

export default UpdateBirdForm;
