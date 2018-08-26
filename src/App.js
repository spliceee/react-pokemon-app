import React, { Component, Fragment } from 'react';

// Components
import Navbar from './components/Navbar';
import Footbar from './components/Footbar';
// Pages
import PageHome from './pages/Home';

class App extends Component {
  render(){
    return (
      <Fragment>
        <Navbar />
        <div className="App">
          <PageHome />
        </div>
        <Footbar />
      </Fragment>
    );
  }
}

export default App;
