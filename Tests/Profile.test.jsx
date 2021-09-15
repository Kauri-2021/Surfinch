import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Profile from 'client/components/Profile/Profile.jsx';


var currentUser = {
  userID: 1,
  username: 'AJP_BABY',
  email: 'improbablygayforclendon@gmail.com',
  avatar_pic: 'crane',
  avatar_background: '#06a4B2',
  entries: 3,
  logins: 43
};


describe('Profile page was rendered', () => {
  it('Has a value for the username', () => {
    const wrapper = shallow(<Profile currentUser={currentUser} />);
    const avatarDiv = wrapper.find('.profile-username');

    expect(avatarDiv.text()).toEqual('AJP_BABY');
  });
});