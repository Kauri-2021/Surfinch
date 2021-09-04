import React, { useState, useEffect } from 'react';
import Avatar from '../Shared/Avatar.jsx';
import ProfileBadges from './ProfileBadges.jsx';
import BirdNest from './BirdNest.jsx';
import Rankings from '../Shared/Rankings.jsx';
import axios from 'axios';
import { FaFeatherAlt } from 'react-icons/fa';

const Profile = ({ currentUser }) => {

  /// HOOKS WILL BE HERE FOR DB CALLS //
  const [badges, setBadges] = useState();
  const [entries, setEntries] = useState([]);
  // const [ranks, setRanks] = useState([]);

  // useEffect(() => {

  // }, []);

  useEffect(() => {
    axios.get(`/stats/${currentUser.username}`)
      .then((results) => {
        var stats = results.data[0];
        console.log('STATS: ', stats);
        setBadges(stats);
      })
      .catch((error) => {
        console.log('error fetching badges: ', error);
      });
    axios.get(`/userbirds/${currentUser.userID}`)
      .then((results) => {
        console.log('Birds: ', results);
        setEntries(results.data);
      })
      .catch((error) => {
        console.log('Error fetching birds: ', error);
      });
    // axios.get(`/rankings`)
    //   .then((results) => {
    //     var rankings = results.data;
    //     console.log('Ranks: ', rankings);
    //     setRanks(rankings);
    //   })
    //   .catch((error) => {
    //     console.log('error fetching rankings: ', error);
    //   });
  }, [])

  return (
    <div className="profile-parent">
       <div className='profile-header'>
          <h3 className='profileTitle'>Your Profile</h3>
        </div>
      <div className='profile-section'>
        <div className="profile-info">
          <div className='profile-avatar'>
            <Avatar size={75}
              color={currentUser.avatar_background || '#c8994d'}
              avatar_pic={currentUser.avatar_pic || 'crane'} />
            <h6 className='profile-username'>{currentUser.username}</h6>
          </div>
          <div className='badgeContainer'>
          <ProfileBadges badges={badges} currentUser={currentUser} profile={currentUser.username} />
          </div>
          <div className='profile-details'>
            <div className='user-info-container'>
              <div className='profile-detail-item'>
                Email: {currentUser.email}
              </div>
              <div className='profile-detail-item'>
                Entries: {currentUser.entries}
              </div>
              <div className='profile-detail-item'>
                Logins: {currentUser.logins}
              </div>
              <div className='profile-detail-item'>
                Avatar: {currentUser.avatar_pic}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='social-section'>
        <h3>Social stats:</h3>
        <div className="social-view">
          <ProfileBadges badges={badges} currentUser={currentUser} social={1} />
        </div>
      </div>
      <div className="bird-nest-container">
        <div className='bird-nest-section'>
          <div className="bird-nest-header">
            <h3 className='birdNestTitle'>Bird Nest</h3>
            <FaFeatherAlt size="25px" color="#566573" marginTop="5px" />
          </div>
          <BirdNest birds={entries} />
        </div>
      </div>
    </div>
  );
}

export default Profile;
