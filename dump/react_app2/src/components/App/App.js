import React from 'react';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ErrorIndicator from '../ErrorIndicator';
import SwapiService from '../../services/SwapiService';
import {SwapiServiceProvider} from '../swapi-service-context';
import {PeoplePage, PlanetsPage, StarshipsPage, SecretPage, LoginPage} from '../pages';
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
import { BrowserRouter as Router,Switch,Redirect, Route } from 'react-router-dom';

class App extends React.Component {

    swapiService = new SwapiService();

    state = {
        hasError: false,
        isLoggedIn: false
    }

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })
        console.log(this.state.isLoggedIn);
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
                    <Router>
                        <div className='stardb-app'>
                            <Header />
                            <RandomPlanet />

                            <Switch>
                                <Route path="/" exact render={() => <h2>Welcom to StarDB</h2>} />
                                <Route path="/people/:id?" component={PeoplePage} />
                                <Route path="/planets" component={PlanetsPage} />
                                <Route path="/starships" exact component={StarshipsPage} />
                                <Route path="/starships/:id" 
                                        render={( {match} ) => {
                                            return <StarshipDetails itemId={match.params.id} />
                                        }} />
                                <Route path="/login" render={() => (
                                    <LoginPage isLoggedIn={this.state.isLoggedIn} onLogin={this.onLogin}/>
                                )} />
                                <Route path="/secret" render={() => (
                                    <SecretPage isLoggedIn={this.state.isLoggedIn} />
                                )} />
                                <Route render={() => <ErrorIndicato />} />
                            </Switch>

                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry> 
        )
    }
}

export default App;