import React from 'react';
import './App.css';
import Album from '../Album/Album';
import Blurb from '../Blurb/Blurb';
import {albumcovers} from '../../albumcovers';

class App extends React.Component {
  render() {
    //generating random number to pick an image from the list
    let i=Math.floor(Math.random()*(albumcovers.length-1));

    return (
      <div className="App">
        <Album idx={i}/>
        <Blurb idx={i}/>
      </div>
    );
  }
}

export default App;
