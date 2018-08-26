import React, { Component } from 'react';

// Components
import Navbar from './components/Navbar';
import Footbar from './components/Footbar';
// Pages
import PageHome from './pages/Home';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Navbar />
        <PageHome />
        <Footbar />
      </div>
    );
  }
}

export default App;
