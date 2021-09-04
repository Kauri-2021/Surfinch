import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateBirdForm from './CreateBirdForm.jsx';
import UpdateBirdForm from './UpdateBirdForm.jsx';
import BirdEntryList from './BirdEntryList.jsx';

const BirdEntry = ({ currentUser, location }) => {
  return (
    <div>
      <CreateBirdForm location={location} currentUser={currentUser} />
    </div>
  )
}

export default BirdEntry;
