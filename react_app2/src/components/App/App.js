import React from 'react';

import Header from '../Header';
import ErrorButton from '../ErrorButton';
import RandomPlanet from '../RandomPlanet';
import ErrorIndicator from '../ErrorIndicator';
import SwapiService from '../../services/SwapiService';
import {SwapiServiceProvider} from '../swapi-service-context';
import {PeoplePage, PlanetsPage, StarshipsPage} from '../pages';
import {
    PersonList,
    PlanetList,
    StarshipList,
    PersonDetails,
    PlanetDetails,
    StarshipDetails
  } from '../sw-components'
import './App.scss';
import Row from '../Row';
import ErrorBoundry from '../ErrorBoundry';

class App extends React.Component {

    swapiService = new SwapiService();

    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState({hasError: true})
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                    <div className='stardb-app'>
                        <Header />
                        <RandomPlanet/>
                        {/* <div className="row mb2 button-row">
                            <button
                            className="toggle-planet btn btn-warning btn-lg"
                                onClick={this.toggleRandomPlanet}>
                                Toggle Random Planet
                            </button>
                            <ErrorButton />
                        </div> */}

                        <PeoplePage />
                        <PlanetsPage />
                        <StarshipsPage />

                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        )
    }
}

export default App;