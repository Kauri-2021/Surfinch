import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import { hasUncaughtExceptionCaptureCallback } from 'process';

Enzyme.configure({ adapter: new Adapter() });