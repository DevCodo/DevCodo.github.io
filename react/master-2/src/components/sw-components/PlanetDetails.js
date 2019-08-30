import React from 'react';
import ItemDetails from '../ItemDetails/ItemDetails';
import Record from '../Record/Record';
import withSwapiService from '../hocHelpers/withSwapiService';

const PlanetDetails = (props) => {
  return (
    <ItemDetails {...props}>
        
        <Record field="population" label="Population" />
        <Record field="rotationPeriod" label="RotationPeriod" />
        <Record field="diameter" label="Diameter" />

    </ItemDetails>
  )
}

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  }
}

export default withSwapiService(PlanetDetails, mapMethodsToProps);
