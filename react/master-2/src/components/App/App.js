import React, { Component } from 'react';
import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';
import SwapiService from '../../services/swapiService';
import {SwapieServiceProvider} from '../swapiServiceContext/swapiServiceContext';
import{ PeoplePage, PlanetsPage, StarshipsPage } from '../pages';
import { BrowserRouter as Router, Route } from 'react-router-dom';


export class App extends Component {

  swapiService = new SwapiService();

  state = {
    selectPeson: 1,
  }


  onPesonSelected = (id) => {
    this.setState({
      selectPeson: id
    })
  }

  render() {

    return (
      <ErrorBoundry >
        <SwapieServiceProvider value={this.swapiService}>
          <Router>
            <div className="container">
                <Header />

                <Route path="/" render={ () => <RandomPlanet /> } exact />
                <Route path="/people" render={ () => <PeoplePage /> } />
                <Route path="/planets" component={PlanetsPage} />
                <Route path="/starships" render={ () => <StarshipsPage /> } />
                
            </div>
          </Router>
        </SwapieServiceProvider>
      </ErrorBoundry>
    );
  }
}

export default App;
