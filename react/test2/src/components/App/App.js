import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.scss';
import Header from '../Header';
import NavMenu from '../NavMenu';
import Profile from '../Profile';
import Message from '../Message';
import Footer from '../Footer';

class App extends React.Component {
 
  render() {

    return (
      <BrowserRouter>
        <Header />

        <div className="container main">
          
          <NavMenu />

          <main>
            <Route path='/profile'  render={ () => <Profile /> } exact/>
            <Route path='/message' render={ () => <Message /> } />
          </main>

        </div>

        <Footer />
      </BrowserRouter>
    )
  }
};

export default App;

