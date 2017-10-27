import React, { Component } from 'react';
import Header from './Header';
import BodyContent from './BodyContent';

class App extends Component {
  render() {
    return (
      <div >
        <Header />
        <BodyContent />
      </div>
    );
  }
}

export default App;