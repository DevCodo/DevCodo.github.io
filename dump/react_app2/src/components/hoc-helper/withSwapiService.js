import React from 'react';

import { SwapiServiceConsumer } from '../swapi-service-context';

const withSwapiService = (Wrapped, mapMethodsToProps) => {

  return (props) => {

    return(
      <SwapiServiceConsumer>
        {
          (swapiService) => {
            const mapProps = mapMethodsToProps(swapiService);
            return (
              <Wrapped {...props} {...mapProps} />
            )
          }
        }
      </SwapiServiceConsumer>
    )

  }

}

export default withSwapiService;