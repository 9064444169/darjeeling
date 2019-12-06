import React, { Component } from 'react';
import Navbar from "./components/navbar/navbar";
import './App.scss';
import Tourlist from './components/tourlist';

class App extends Component {
  render() {
    return (

      <main>
      <Navbar />
      <Tourlist />
    </main>
    );
    
  }
}

export default App;
