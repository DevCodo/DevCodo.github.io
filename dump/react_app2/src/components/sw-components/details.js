import React from 'react';

import ItemDetails, { Record } from '../ItemDetails';
import {withSwapiService} from '../hoc-helper';

const PersonDetails = ( props ) => {
  return (
    <ItemDetails {...props} >

      <Record field='gender' label='Gender' />
      <Record field='eyeColor' label='Eye Color' />

    </ItemDetails>
  )

};
const PlanetDetails = ( props ) => {
  return (
    <ItemDetails {...props}>

      <Record field='population' label='Population' />
      <Record field='rotationPeriod' label='Rotation Period' />
      <Record field='diameter' label='Diameter' />

    </ItemDetails>
  )

};
const StarshipDetails = ( props ) => {
  return (
    <ItemDetails {...props} >

      <Record field='model' label='Model' />
      <Record field='length' label='length' />
      <Record field='costInCredits' label='cost' />

    </ItemDetails>
  )

};

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  }
}

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  }
}

const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  }
}

const PersonDetailswithConsumer = withSwapiService(PersonDetails, mapPersonMethodsToProps);
const PlanetDetailswithConsumer = withSwapiService(PlanetDetails, mapPlanetMethodsToProps);
const StarshipDetailswithConsumer = withSwapiService(StarshipDetails, mapStarshipMethodsToProps);

export {
  PersonDetailswithConsumer as PersonDetails,
  PlanetDetailswithConsumer as PlanetDetails,
  StarshipDetailswithConsumer as StarshipDetails
}