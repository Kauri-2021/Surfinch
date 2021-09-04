import React from 'react';

const Avatar = (props) => {
  return (
    <div className='avatar-img rounded-circle' style={{ width: props.size, height: props.size, backgroundColor: props.color }}>
      <img className='svg-image' style={{ width: props.size - 20, height: props.size - 20 }} src={require(`../../../public/assets/${props.avatar_pic}.svg`)}></img>
    </div >
  );
}

export default Avatar;