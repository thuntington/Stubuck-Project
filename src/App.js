import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import SiteInfo from './Footer/SiteInfo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
        <SiteInfo />
      </div>
    );
  }
}

export default App;
