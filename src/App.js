
import './App.css';
import Navbar from './Navbar';
import React, { Component } from 'react';

import{ News} from './News';
export class App extends Component {
  render() {
    return (
      <div>
          <Navbar/>
          <News/>
      </div>
    )
  }
}

export default App
