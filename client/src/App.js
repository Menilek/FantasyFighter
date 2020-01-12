import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import AppNavBar from './components/Layout/AppNavBar';
import CreateFighter from './components/CreateFighter/CreateFighter';
import PlayGame from './components/Game/PlayGame';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <AppNavBar />
          <Container>          
            <Switch>
              <Route exact path='/' component={CreateFighter} />
              <Route path='/play' component={PlayGame} />
            </Switch>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;