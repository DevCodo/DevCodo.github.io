import React from 'react';
import ItemList from '../ItemList/ItemList';
import withData from '../hocHelpers/withData';
import withSwapiService from '../hocHelpers/withSwapiService';
import withChildFunction from '../hocHelpers/withChildFunction';

const renderNamePerson = ({name, birthYear}) => `${name} ${birthYear}`;
const renderNamePlanet = ({name, diameter}) => `${name} ${diameter}`;
const renderName = ({name}) => `${name}`;

const mapMethodsToPropsPerson = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  }
}
const mapMethodsToPropsPlanet = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  }
}
const mapMethodsToPropsStarship = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  }
}

export const PersonList = withSwapiService(
                          withData(withChildFunction(ItemList, renderNamePerson)),
                          mapMethodsToPropsPerson);
export const PlanetList = withSwapiService(
                          withData(withChildFunction(ItemList, renderNamePlanet)),
                          mapMethodsToPropsPlanet);
export const StarshipList = withSwapiService(
                            withData(withChildFunction(ItemList, renderName)),
                            mapMethodsToPropsStarship);
