import React, { Component } from 'react';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

export class ErrorBoundry extends Component {

  state = {
    hadError: false
  }

  componentDidCatch() {
    this.setState({hadError: true})
  }

  render() {

    if (this.state.hadError) {
      return <ErrorIndicator />
    }

    return (
      this.props.children
    )
  }
}

export default ErrorBoundry;
