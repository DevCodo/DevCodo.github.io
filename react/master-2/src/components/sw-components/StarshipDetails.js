import React from 'react';
import ItemDetails from '../ItemDetails/ItemDetails';
import Record from '../Record/Record';
import withSwapiService from '../hocHelpers/withSwapiService';

const StarshipDetails = (props) => {
  return (
    <ItemDetails {...props}>
        
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="crew" label="Crew" />

    </ItemDetails>
  )
}

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  }
}

export default withSwapiService(StarshipDetails, mapMethodsToProps);