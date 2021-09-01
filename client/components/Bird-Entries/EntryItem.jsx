import React from 'react';

const EntryItem = ({ photo, notes, city, state, name }) => {
  return (
    <div className="d-flex col-6 border-secondary card">
      <div>
        <img height='100' width='100' src={photo} className="card-image-top" />
      </div>
      <div>
        <p>{name}</p>
        <p>
          {
            city &&
            <span>{city}, </span>
          }
          {state}
        </p>
        <p>{notes}</p>
      </div>
    </div>
  )
}

export default EntryItem;
