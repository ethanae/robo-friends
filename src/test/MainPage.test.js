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

describe('MainPage.filterRobots test', () => {
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
    const wrapper = shallow(<MainPage {...mockProps} />);
    expect(wrapper.instance().filterRobots()).toEqual(mockProps.robots);
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
    const wrapper = shallow(<MainPage {...mockProps} />);
    expect(wrapper.instance().filterRobots()).toEqual([]);
  });
});

describe('Fetch robots state tests', () => {
  it('displays loading message', () => {
    const mockProps = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: '',
      isPending: true
    };
    const wrapper = shallow(<MainPage {...mockProps} />);
    expect(wrapper.find(CardList)).toHaveLength(0);
    expect(wrapper.find(SearchBox)).toHaveLength(0);
    expect(wrapper.find('h1').text()).toEqual('Loading friends...');
    expect(wrapper).toMatchSnapshot();
  });

  it('displays loading message then renders full component', () => {
    const mockProps = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: '',
      isPending: true
    };
    const pendingWrapper = shallow(<MainPage {...mockProps} />);
    expect(pendingWrapper.find(CardList)).toHaveLength(0);
    expect(pendingWrapper.find(SearchBox)).toHaveLength(0);
    expect(pendingWrapper.find('h1').text()).toEqual('Loading friends...');

    const resolvedWrapper = shallow(<MainPage {...{ ...mockProps, isPending: false }} />);
    expect(resolvedWrapper.find(CardList)).toHaveLength(1);
    expect(resolvedWrapper.find(SearchBox)).toHaveLength(1);
  });
});

describe('<ErrorBoundary> within <MainPage>', () => {
  it('handles CardList error and invokes ErrorBoundary.componentDidCatch', () => {
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
});
