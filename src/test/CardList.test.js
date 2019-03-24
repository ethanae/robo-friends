import React from 'react';
import CardList from '../components/CardList';
import { shallow } from 'enzyme';

it('renders Card', () => {
  const mockRobots = [{
    id: 1,
    name: 'Jon',
    email: 'joN@gmail.com'
  }];

  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});