import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { hasUncaughtExceptionCaptureCallback } from 'process';

import BirdProfile from 'client/components/Bird-Profile/BirdProfile.jsx';


Enzyme.configure({ adapter: new Adapter() });

// var currentUser = {
//   userID: 1,
//   username: 'AJP_BABY',
//   email: 'improbablygayforclendon@gmail.com',
//   avatar_pic: 'crane',
//   avatar_background: '#06a4B2',
//   entries: 3,
//   logins: 43
// };

// describe('it should render the bird profile page', () => {
//   const wrapper = shallow(<BirdProfile currentUser={currentUser} />);
//   const
// })