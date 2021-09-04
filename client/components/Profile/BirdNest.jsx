import React from 'react';
import Avatar from '../Shared/Avatar.jsx';
import BirdNestItem from './BirdNestItem.jsx';

const BirdNest = ({ birds }) => {

  console.log('Birds inside nest comp: ', birds);
  var fakeData = [{ pic: 'URL', name: 'Parrot' }, { pic: 'URL', name: 'Crane' }, { pic: 'URL', name: 'Eagle' }];

  return (
    <div className="bird-nest">
      {birds.map((bird, i) => {
        return (

          <BirdNestItem key={i} bird={bird} />

        );
      })}
    </div>
  );

}

export default BirdNest;