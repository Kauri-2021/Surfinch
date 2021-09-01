import React from 'react';
import Avatar from '../Shared/Avatar.jsx';

const Profile = (props) => {

  var fakeData = [{ pic: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ZJormN7TrFZCjK9dnVVyLwHaE8%26pid%3DApi&f=1', name: 'Parrot' }, { pic: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.e_s_eMqR5k5u27d1w2tpewHaEK%26pid%3DApi&f=1', name: 'Crane' }, { pic: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.rtGHltdOrIUqdNXqw-vh6wHaFj%26pid%3DApi&f=1', name: 'Eagle' }, { pic: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.tyfd9yJEQLEWLTKY-Pv2EwHaEK%26pid%3DApi&f=1', name: 'Eagle' }];

  /// HOOKS WILL BE HERE FOR DB CALLS

  return (
    <div className="profile-parent">
      <div className='profile-section'>
        <h3>Profile info:</h3>
        <div className="profile-info">
          <Avatar size={75} color='#C8994D' />
          <div className='user-info container'>
            Mr. Raymonds
            <span class="badge rounded-pill bg-info text-dark">Frequent Flyer</span>
            <span class="badge rounded-pill bg-success">Migrant</span>
          </div>
        </div>
      </div>
      <div className='social-section'>
        <h3>Social stats:</h3>
        <div className="social-view">
          <h6>Most birds<span class="badge bg-warning">1</span></h6>
          <h6>Frequent Flyer <span class="badge bg-primary">3</span></h6>
          <h6>Migrant <span class="badge bg-secondary">6</span></h6>
        </div>
      </div>
      <div className='bird-nest-section'>
        <h3>Bird Nest:</h3>
        <div className="bird-nest">
          {fakeData.map((bird, i) => {
            return (
              <div className='bird-nest-item'>
                {/* <Avatar size={75} pic={bird.pic} name={bird.name} color='red' /> */}
                <img className='rounded-3' style={{ width: 75, height: 75 }} src={bird.pic} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Profile;