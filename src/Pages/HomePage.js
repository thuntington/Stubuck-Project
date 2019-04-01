import React, { Component } from 'react';
import './homePage.css';

//Pages
import Header from '../Header/Header';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import SiteInfo from '../Footer/SiteInfo';


class HomePage extends Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <Body />
        <Footer />
        <SiteInfo />
      </div>
    );
  }
}

export default HomePage;