import React from 'react';

import './RandomPlanet.scss';

import Spinner from '../../components/Spinner/Spinner';
import ErrorIndicator from '../../components/ErrorIndicator/ErrorIndicator';
import SwapiService from '../../services/swapiService';

export default class RandomPlanet extends React.Component {

  swapiService = new SwapiService();

  static defaultProps = {
    interval: 5000
  }

  state = {
    planet: {},
    loading: true,
    error: false
  }
  
  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, this.props.interval);
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
      loading: false,
      error: true
    })
  }

  updatePlanet = () => {
    const id = Math.ceil(Math.random()*25 + 1);
    this.swapiService.getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError)
  }

  render() {

    const { planet, loading, error } = this.state;

    const err = error ? <ErrorIndicator />  : null ;
    const load = loading ? <Spinner />  : null ;
    const content = !loading && !error ? <PlanetView planet={planet} /> : null;

    return (
      <div className="random-planet jumbotron rounded">
        { load }
        { content }
        { err }
      </div>

    );
  }
}

const PlanetView = ({ planet: {id, name, population, rotationPeriod, diameter}}) => {
  return (
    <>
     <img className="planet-image"
            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
      <div>
        <h4>{ name }</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{ population }</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{ rotationPeriod }</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{ diameter }</span>
          </li>
        </ul>
      </div>
    </>
  )
}

