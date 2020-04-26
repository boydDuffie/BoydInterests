import React from 'react';
import './App.css';
import Album from '../Album/Album';
import Blurb from '../Blurb/Blurb';

class App extends React.Component {
  render() {
    return (
      <div>
        <Album />
        <Blurb />
      </div>
    );
  }
}

export default App;
