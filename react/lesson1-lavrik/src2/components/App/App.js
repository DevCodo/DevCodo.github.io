import React from 'react';
import {observer} from 'mobx-react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import store from './../service/store';
import routes from './../service/routes';

@observer class App extends React.Component {

  render() {
    let routesComponents = routes.map(el => {
      return <Route path={el.url} 
                    component={el.component} 
                    exact={el.exact}
                    key={el.url} />
    })

    return (
      <Router>
        <Switch>
          {routesComponents}
        </Switch>
      </Router> 
    )
  }
};

export default App;

