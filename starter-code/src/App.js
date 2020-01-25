import React, { Component } from 'react'
import './App.css'
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from './components/misc/Header'
import Home from './components/Home'
import Beers from './components/Beers'
import BeerDetail from './components/BeerDetail'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        
        <main className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/beers' component={Beers} />
            <Route exact path='/beers/:beerId' component={BeerDetail} />
            <Route exact path='/random-beer' component={RandomBeer} />
            <Route exact path='/new-beer' component={NewBeer} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
