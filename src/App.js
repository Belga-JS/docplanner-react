
import React, { Component } from 'react'; //imrc
import Header from './header';
import Section from './section';
import Platform from './platform';
import Picture from './picture';
import Footer from './footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <Section />
        </div>
        <div>
          <Platform/>
        </div>
        <div>
          <Picture/>
        </div>
        <div>
          <Footer/>
        </div>
      </div>

    );

  }
}


export default App;
