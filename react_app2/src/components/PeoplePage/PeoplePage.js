import React from 'react';

import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';

import './PeoplePage.scss';
import ErrorIndicator from '../ErrorIndicator';
import ErrorButton from '../ErrorButton';
import Row from '../Row';
import ErrorBoundry from '../ErrorBoundry';
import SwapiService from '../../services/SwapiService';

export default class PeoplePage extends React.Component {

  swapiService = new SwapiService();


  state = {
    selectedPerson: 3,
    hasError: false
  }

  onPersonSelected = (id) => {
    this.setState({
        selectedPerson: id
    })
}


  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const itemList = (
      <ItemList 
      onItemSelected={this.onPersonSelected}
      getDate={this.swapiService.getAllPeople}>

        { (i) => (
          `${i.name} (${i.birthYear})`
        )}

      </ItemList>
    )

    const personDetails = (
      <ErrorBoundry>
        <PersonDetails personId={this.state.selectedPerson} />
      </ErrorBoundry>
    )

    return (
        <Row left={itemList} right={personDetails} />
    )
  }
}