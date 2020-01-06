import React, { Component } from 'react';
import { Container } from 'reactstrap';
import AppNavBar from './components/AppNavBar';
import CreateFighter from './components/CreateFighter/CreateFighter';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
        <div className='App'>
          <AppNavBar />
          <Container>          
            <CreateFighter />
          </Container>
        </div>
    );
  }
}

export default App;