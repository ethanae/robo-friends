import React from 'react';
import MainPage from '../components/MainPage';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
import { shallow, mount } from 'enzyme';

it('renders MainPage', () => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  };
  const wrapper = shallow(<MainPage {...mockProps} />);
  expect(wrapper).toMatchSnapshot();
});

it('filters robots - returns array of objects', () => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'JoN',
      email: 'j@j.com'
    }],
    searchField: 'on',
    isPending: false
  };
  const newWrapper = shallow(<MainPage {...mockProps}/>);
  expect(newWrapper.instance().filterRobots()).toEqual(mockProps.robots);
});

it('filters robots - returns empty array', () => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'JoN',
      email: 'j@j.com'
    }],
    searchField: 'terminator',
    isPending: false
  };
  const newWrapper = shallow(<MainPage {...mockProps}/>);
  expect(newWrapper.instance().filterRobots()).toEqual([]);
});

it('handles isPending', () => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: true
  };
  const newWrapper = shallow(<MainPage {...mockProps} />);
  expect(newWrapper.find(CardList)).toHaveLength(0);
  expect(newWrapper.find(SearchBox)).toHaveLength(0);
  expect(newWrapper.find('h1').text()).toEqual('Loading friends...');
  expect(newWrapper).toMatchSnapshot();
});

it('handles ErrorBoundary', () => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  };
  const errorBoundarySpy = jest.spyOn(ErrorBoundary.prototype, 'componentDidCatch');
  const wrapper = mount(<MainPage {...mockProps} />);
  wrapper.find(CardList).simulateError(new Error());
  expect(errorBoundarySpy).toHaveBeenCalled();
});
