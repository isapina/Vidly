import React, { Component } from 'react';
import './App.css';
import Movies from './components/Movies';

class App extends Component {
  render() {
    return (
      <main className="container">
        <div className="starter-template">
          <Movies />
        </div>
      </main >
    );
  }
}

export default App;
