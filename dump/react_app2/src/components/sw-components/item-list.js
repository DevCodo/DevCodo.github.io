import React from 'react';
import ItemList from '../ItemList';
import { withData, withSwapiService } from '../hoc-helper';

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  }
}

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ name, model }) => <span>{name} ({model})</span>;

const mapPersonMethodToProps = (SwapiService) => {
  return {
    getData: SwapiService.getAllPeople
  }
}
const mapPlanetsMethodToProps = (SwapiService) => {
  return {
    getData: SwapiService.getAllPlanets
  }
}
const mapStarshipsMethodToProps = (SwapiService) => {
  return {
    getData: SwapiService.getAllStarships
  }
}

const PersonList = withSwapiService(
                    withData(
                    withChildFunction(ItemList, renderName)),
                    mapPersonMethodToProps);

const PlanetList = withSwapiService(
                    withData(
                    withChildFunction(ItemList, renderName)),
                    mapPlanetsMethodToProps);

const StarshipList = withSwapiService(
                      withData(
                      withChildFunction(ItemList, renderModelAndName)),
                      mapStarshipsMethodToProps);

export {
  PersonList,
  PlanetList,
  StarshipList 
}