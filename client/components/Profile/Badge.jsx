import React from 'react';

const Badge = ({ title, color, rank }) => {

  if (rank) {
    return (
      <h5>{title}  <span className={`badge ${color}`}>{rank}</span></h5>
    );
  } else {
    return (
      <span className={`badge rounded-pill ${color}`}>{title}</span>
    );
  }

}

export default Badge;