import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { hasUncaughtExceptionCaptureCallback } from 'process';

import Homepage from 'client/components/Homepage/Homepage.jsx';


Enzyme.configure({ adapter: new Adapter() });

var currentUser = {
  userID: 1,
  username: 'AJP_BABY',
  email: 'improbablygayforclendon@gmail.com',
  avatar_pic: 'crane',
  avatar_background: '#06a4B2',
  entries: 3,
  logins: 43
};


// decribe('Homepage exists', () => {
//   it('sucks', () => {
//     const wrapper = shallow(<Homepage currentUser={currentUser} />);
//     const topBirders = wrapper.find('.some-class')
//   })
//})

it('should render correctly with no hardcoded prop', () => {
  const component = shallow(<Homepage currentUser={currentUser} />);

  expect(component).toMatchSnapshot();
});
/*
it('should render correctly with given strings', () => {
  const strings = ['one', 'two'];
  const component = shallow(<Homepage  />);
  expect(component).toMatchSnapshot();
});
*/