import React, { Component } from 'react';

import Row from '../Row/Row';
import { PersonList, PersonDetails } from '../sw-components';

export class PeoplePage extends Component {

  state = {
    selectItem: 1,
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
          left={<PersonList onItemSelected={this.onPesonSelected} />} 
          right={<PersonDetails itemId={selectItem}/>}/>
    );
  }
}

export default PeoplePage;

