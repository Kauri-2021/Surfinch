import React from 'react';
import Avatar from '../Shared/Avatar.jsx';

const Profile = (props) => {

  var fakeData = [{ pic: 'URL', name: 'Parrot' }, { pic: 'URL', name: 'Crane' }, { pic: 'URL', name: 'Eagle' }];

  /// HOOKS WILL BE HERE FOR DB CALLS

  return (
    <div className="profile-parent">
      <div className='profile-section'>
        <h3>Profile info:</h3>
        <div className="profile-info">
          <Avatar size={75} color='blue' />
          <div className='user-info container'>

          </div>
        </div>
      </div>
      <div className='social-section'>
        <h3>Social stats:</h3>
        <div className="social-view">
          <h2>Need to decide what stats matter here</h2>
        </div>
      </div>
      <div className='bird-nest-section'>
        <h3>Bird Nest:</h3>
        <div className="bird-nest">
          {fakeData.map((bird, i) => {
            return (
              <div className='bird-nest-item'>
                <Avatar size={75} pic={bird.pic} name={bird.name} color='red' />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Profile;

