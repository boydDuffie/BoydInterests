import React from 'react';
import './App.css';
import Album from '../Album/Album';
import NavBar from '../NavBar/NavBar';
import Title from '../Title/Title';
import { albumcovers } from '../../albumcovers';
import Metadata from '../Metadata/Metadata';

//generating random number to pick an image from the list
let i = Math.floor(Math.random() * (albumcovers.length - 1));

//App component will render all other components together.
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'Album Covers',
    };
  }

  render() {
    return (
      <div className="App">
        <Title mode={this.state.mode} />
        <NavBar />
        <Album idx={i} />
        <Metadata />
      </div>
    );
  }
}

export default App;
