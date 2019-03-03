import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      console.log('error boundary ***********************88');
      return <h1>Oooops. An error occurred</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
