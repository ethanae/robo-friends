import React, { Component } from "react";

//components
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Fixed from '../components/Fixed';
import ErrorBoundary from '../components/ErrorBoundary';

class MainPage extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = () => this.props.robots.filter(robot => robot.name.toLowerCase().includes(this.props.searchField.toLowerCase()));

  render() {
    const { onSearchChanged, isPending } = this.props;

    if (isPending)
      return <h1 className='f3 tc ma5'>Loading friends...</h1>;

    return (
      <div className='tc'>
        <Fixed>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChanged={onSearchChanged} />
        </Fixed>
        <div className='mt7'>
          <ErrorBoundary>
            <CardList robots={this.filterRobots()} />
          </ErrorBoundary>
        </div>
      </div>
    );
  }
}

export default MainPage;