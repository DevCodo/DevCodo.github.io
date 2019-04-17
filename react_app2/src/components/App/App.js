import React from 'react';

import Header from '../Header';
import ErrorButton from '../ErrorButton';
import ItemList from '../ItemList';
import RandomPlanet from '../RandomPlanet';
import PersonDetails from '../PersonDetails';
import ErrorIndicator from '../ErrorIndicator';
import PeoplePage from '../PeoplePage/PeoplePage';
import SwapiService from '../../services/SwapiService';

import './App.scss';

class App extends React.Component {

    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true,
        hasError: false
    }

 

    toggleRandomPlanet = () => {
        this.setState((state) => {
          return {
            showRandomPlanet: !state.showRandomPlanet
          }
        });
      };

    componentDidCatch() {
        this.setState({hasError: true})
    }

    render() {
        
        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

        return (
            <div>
                <Header />
                {planet}
                <div className="row mb2 button-row">
                    <button
                        className="toggle-planet btn btn-warning btn-lg"
                        onClick={this.toggleRandomPlanet}>
                        Toggle Random Planet
                    </button>
                    <ErrorButton />
                </div>

                <PeoplePage />
                
                {/* <div className='row mb2'>
                    <div className='col-md-6'>
                        <ItemList 
                        onItemSelected={this.onPersonSelected}
                        getDate={this.swapiService.getAllPlanets}
                        renderItem={(item) => (<span>{item.name}<button>!fgfg</button></span>)}
                        />
                    </div>
                    <div className='col-md-6'>
                        <PersonDetails personId={this.state.selectedPerson} />
                        <ErrorButton />
                    </div>
                </div>
                
                <div className='row mb2'>
                    <div className='col-md-6'>
                        <ItemList 
                        onItemSelected={this.onPersonSelected}
                        getDate={this.swapiService.getAllStarships}
                        renderItem={({name, gender, birthYear}) => `${name} ()`}
                        />
                    </div>
                    <div className='col-md-6'>
                        <PersonDetails personId={this.state.selectedPerson} />
                        <ErrorButton />
                    </div>
                </div> */}

            </div>
        )
    }
}

export default App;