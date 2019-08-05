import React from 'react';

import SwapiService from '../../services/SwapiService';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';

import './RandomPlanet.scss';

export default class RandomPlanet extends React.Component {

    static defaultProps = {
        updateInterval: 5000,
    }

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        const { updateInterval } = this.props
        this.updatePlanet();
        // this.interval = setInterval(this.updatePlanet, updateInterval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 25) + 2;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    }

    render() {
        const { planet, loading, error } = this.state;

        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ? <PlanetView planet={ planet } /> : null;

        return (
            <div className='random-planet jumbotron rounded d-flex'>
                {errorMessage}
                {spinner}
                {content}
            </div>
        )
    }
};

const PlanetView = ({planet}) => {

    const { id, population, rotationPeriod, diameter, name } = planet;

    return (
        <React.Fragment>
            <img className='planet-image' src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
            <div>
                <h4>{ name }</h4>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <span className='term'>Population</span>
                        <span>{ population }</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'>Rotatin Period</span>
                        <span>{ rotationPeriod }</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'>Diameter</span>
                        <span>{ diameter }</span>
                    </li>
                </ul>
            </div> 
        </React.Fragment>
    )
}