import React, { Component } from 'react';
import './navBar.css';
import logo from './stubucks-logo.png'

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      scrolled: true,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== true) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    })
  }

  // componentWillMount() {
  //   window.removeEventListener('scroll');
  // }

  render() {
    return (
      <div className={this.state.scrolled ? 'nav scrolled' : 'nav'}>
       <img className='logo' alt='logo' src= {logo}  />  
      <ul className="nav">
                <li>Coffee</li>
                <li>Tea</li>
                <li>Menu</li>
                <li>Rewards</li>
                <li>Want to join our team?</li>
                <li>Location</li>
                <li>Specials</li>
              </ul>
      </div>
    );
  }
}
export default NavBar;