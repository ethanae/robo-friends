import React, { Component } from "react";
import { connect } from "react-redux";

//components
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Fixed from '../components/Fixed';
import ErrorBoundary from '../components/ErrorBoundary';

//styles
import './App.css'

//actions
import { setSearchField, requestRobots } from '../actions';

//read from redux store
const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
}

// dispatch actions
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChanged: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChanged, robots, isPending } = this.props;

    if (isPending)
      return <h1 className='f3 tc ma5'>Loading friends...</h1>;

    const filteredBots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className='tc'>
        <Fixed>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChanged={onSearchChanged} />
        </Fixed>
        <div className='mt7'>
          <ErrorBoundary>
            <CardList robots={filteredBots} />
          </ErrorBoundary>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);