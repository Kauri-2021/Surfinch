import React from 'react';
import Badge from './Badge.jsx';

const ProfileBadges = ({ badges, currentUser, profile, social }) => {

  if (!badges) {
    return (
      <div className='profile-badges'>Loading...</div>
    );
  } else {
    var logColor;
    var entColor;
    var migColor;
    var coopColor;
    switch (badges.login_rank) {
      case 1:
        logColor = 'bg-dark';
        break;
      case 2:
        logColor = 'bg-warning text-dark';
        break;
      case 3:
        logColor = 'bg-secondary';
        break;
      default:
        logColor = 'bg-primary';
        break;
    }
    // for entries
    switch (badges.entry_rank) {
      case 1:
        entColor = 'bg-dark';
        break;
      case 2:
        entColor = 'bg-warning text-dark';
        break;
      case 3:
        entColor = 'bg-secondary';
        break;
      default:
        entColor = 'bg-primary';
        break;
    }
    // other colors
    if (currentUser.logins < 5) {
      migColor = 'bg-secondary';
    } else if (currentUser.logins > 5 && currentUser.logins < 10) {
      migColor = 'bg-primary';
    } else {
      migColor = 'bg-success'
    }
    // coop color
    if (currentUser.entries < 5) {
      coopColor = 'bg-secondary';
    } else if (currentUser.entries > 5 && currentUser.entries < 10) {
      coopColor = 'bg-primary';
    } else {
      coopColor = 'bg-danger';
    }

    // final check to see if this is for the profile section or social section
    if (social) {
      return (
        <div>
          <Badge title={'Most visits to the site:'} color={logColor} rank={badges.login_rank} />
          <Badge title={'Most Entries on Surfinch:'} color={entColor} rank={badges.entry_rank} />
          <Badge title={'Number of logins on Surfinch:'} color={migColor} rank={currentUser.logins} />
          <Badge title={'Size of your bird nest:'} color={coopColor} rank={currentUser.entries} />
          <Badge title={'You are new to Surfinch:'} color={'bg-info text-dark'} rank={Math.floor(Math.random() * 6)} />
        </div>
      );
    } else {
      return (
        <div className='profile-badges'>
          <Badge title={'Frequent Flyer'} color={logColor} />
          <Badge title={'Most Entries'} color={entColor} />
          <Badge title={'Migrant'} color={migColor} />
          <Badge title={'Coup collection'} color={coopColor} />
          <Badge title={'Little birdie'} color={'bg-info text-dark'} />
        </div>
      );
    }
  }
}

export default ProfileBadges;