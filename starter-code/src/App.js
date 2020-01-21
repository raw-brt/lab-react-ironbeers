import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from './components/misc/Header';
import Home from './components/Home'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        
        <main className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
