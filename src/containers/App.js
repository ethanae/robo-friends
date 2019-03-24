import React, { Component } from "react";
import { connect } from "react-redux";

//components
import MainPage from '../components/MainPage';

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
    return <MainPage {...this.props} />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);