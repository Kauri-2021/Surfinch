import React, {useState, useEffect} from 'react';

const EntryItem = ({ photo, city, state, name, handleCardClick }) => {
  const [pic, setPic] = useState('/uploads/noimageavail.jpg');

  return (
    <div className="d-flex card" style={{ width: '196px', minWidth: '196px' }} onClick={handleCardClick} data-birdname={name}>
      <div data-birdname={name} className="card-header text-center font-weight-bold">{name}</div>
      <div data-birdname={name} className="card-img-top" style={{ width: "194px", height: "150px", overflow: 'hidden', backgroundImage: `url(${photo ? photo : pic})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      </div>
      <div className="card-body" data-birdname={name}>
        <small data-birdname={name} className="text-right">
          {
            city &&
            <span>{city}, </span>
          }
          {state}
        </small>
      </div>
    </div>
  )
}

export default EntryItem;
