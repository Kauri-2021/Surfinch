import React from 'react';

const Avatar = (props) => {
  return (
    <div className='rounded-circle' style={{ width: props.size, height: props.size, backgroundColor: props.color }}>
      <img style={{ width: 75, height: 75 }} src={require('../../../public/assets/crane.svg')}></img>
    </div >
  );
}

export default Avatar;