import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import NavBar from './components/NavBar';
import MovieForm from './components/MovieForm';
import Movies from './components/Movies';
import Customers from './components/Customers';
import Rentals from './components/Rentals';
import NotFound from './components/NotFound';

import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" to="/movies" exact />
            <Redirect to="/not-found" />
          </Switch>
        </main >
      </Fragment>
    );
  }
}

export default App;
