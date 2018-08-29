import React, { Component, Fragment } from 'react';

// Common
import { Header, Footer } from './common';
// Routes
import Routes from './Routes';

class App extends Component {
  render(){
    return (
      <Fragment>
        <Header />
        <div className="App">
          <Routes />
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
