import React from 'react';
import {Link, Redirect} from 'react-router-dom';

import {routesMap} from '../service/routes';

class Error404 extends React.Component {
   
   render() {


    return (
      <React.Fragment>
        <div>Страницы не найдено</div> 
        <Link to='/' >Венруться на главную</Link> 
      </React.Fragment>
    )
  }

}

export default Error404;