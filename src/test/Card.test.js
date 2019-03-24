import React from 'react';
import Card from '../components/Card';
import { shallow, mount, render } from 'enzyme';

it('renders Card', () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});