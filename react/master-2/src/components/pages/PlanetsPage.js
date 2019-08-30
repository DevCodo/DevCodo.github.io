import React, { Component } from 'react';

import Row from '../Row/Row';
import { PlanetList, PlanetDetails } from '../sw-components';

export class PlanetsPage extends Component {

  state = {
    selectItem: 7,
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
          left={<PlanetList onItemSelected={this.onPesonSelected} />} 
          right={<PlanetDetails itemId={selectItem}/>}/>
    );
  }
}

export default PlanetsPage;

