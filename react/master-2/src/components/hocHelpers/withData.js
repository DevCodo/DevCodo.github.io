import React, { Component } from 'react';

import Spinner from '../Spinner/Spinner';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

const withData = (View) => {
  return class extends Component {

    state = {
      data: [],
      error: false
    }
  
    componentDidMount() {

      this.props.getData()
        .then( (data) => {
          this.setState({data})
        })
        .catch( () => {
          this.setState({error: true})
        })
    }
 
    render() {

      const { data, error } = this.state;

      if (error) {
        return <ErrorIndicator />
      } 

      if (!data.length) {
        return <Spinner />
      }

      return (
        <View {...this.props} data={data}/>
      )
    }
  }
}

export default withData;
