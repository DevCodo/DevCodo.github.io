import React, { Component } from 'react';

import Row from '../Row/Row';
import { StarshipList, StarshipDetails } from '../sw-components';

export class StarshipsPage extends Component {

  state = {
    selectItem: 5,
  }

  onPesonSelected = (id) => {
    this.setState({
      selectItem: id
    })
  }

  render() {
    
    const {selectItem} = this.state;

    return (
        <Row 
          left={<StarshipList onItemSelected={this.onPesonSelected} />} 
          right={<StarshipDetails itemId={selectItem}/>}/>
    );
  }
}

export default StarshipsPage;

