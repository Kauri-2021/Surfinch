import React, { useState, useEffect } from 'react';
import Badge from '../Profile/Badge.jsx';
import Avatar from './Avatar.jsx';


const Rankings = ({ rankings, currentUser }) => {

  // const [badges, setBadges] = useState([]);

  // useEffect(() => {
  //   axios.get(`/rankings`)
  //     .then((results) => {
  //       var rankings = results.data[0];
  //       console.log('Ranks: ', rankings);
  //       setBadges(rankings);
  //     })
  //     .catch((error) => {
  //       console.log('error fetching rankings: ', error);
  //     });
  // }, []);
  if (rankings.length === 0) {
    return (
      <div>
        Loading....
      </div>
    );
  }

  var firstEntry = rankings.filter((user) => {
    return user.entry_rank === 1;
  })[0];

  var firstLogin = rankings.filter((user) => {
    return user.login_rank === 1;
  })[0];

  // Third badge for number of logins
  var migColor;

  if (currentUser.logins < 5) {
    migColor = 'bg-secondary';
  } else if (currentUser.logins > 5 && currentUser.logins < 10) {
    migColor = 'bg-primary';
  } else {
    migColor = 'bg-success'
  }

  // Youll probably want to add one more div or something to grab their usernames so this has all three pieces you need :)
  return (
    <div className="mini-info-container">
      <h3 className="toptitle">TOP BIRD WATCHERS</h3>
      <div className="firstEntry">
        <Avatar className="topbirdersicon" avatar_pic={firstEntry.avatar_pic} color={firstEntry.avatar_background} size={75} />
        <div className="descriptiontag1">
          <div>{firstEntry.username}</div>
          <Badge title={'Most bird entries'} color={'bg-warning text-dark'} rank={1} />
        </div>
      </div>

      <div className="most-visits">
        <div className="topbirdersicon">
        <Avatar className="topbirdersicon" avatar_pic={firstLogin.avatar_pic} color={firstLogin.avatar_background} size={75} />
        </div>
        <div className="descriptiontag2">
          <div>{firstLogin.username}</div>
          <Badge title={'Most visits to Surfinch'} color={'bg-warning text-dark'} rank={1} />
        </div>
      </div>

      <div className="exotic">
        <Avatar className="topbirdersicon" avatar_pic={currentUser.avatar_pic} color={currentUser.avatar_background} size={75} />
        <div className="descriptiontag3">
          <div>{currentUser.username}</div>
          <Badge title={'An eye for the exotic'} color={'bg-dark'} rank={38}/>
        </div>
      </div>
    </div>
  );
}


export default Rankings;