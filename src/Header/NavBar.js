import React, { Component } from 'react';
import './navBar.css';
import logo from './stubucks-logo.png'

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      scrolled: false,
      checked: false,
    };
  }

  componentDidMount() { //detects to see if scrolling is true
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== true) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    })
  }

  isCheckboxChecked = () => {
    window.addEventListener('click', () => {
        console.log('Menu has been clicked')
        this.setState({ checked: true })
      })
    }
  isCheckboxUnchecked = () => {
    window.addEventListener('click', () => {
      console.log('Menu has been CLOSED')
      this.setState({ checked: false })
    })
  }  
  

  // componentWillMount() {
  //   window.removeEventListener('scroll');
  // }

  render() {
    return (
      <div className='navBar'>
        <img className='logo' alt='logo' src= {logo}  />
       
       <div className='mobNav'>
        <label className='ham' htmlFor="toggle">&#9776;</label>
        <input className="toggle1" type="checkbox" />
      </div>
  
        <ul className={this.state.scrolled ? 'nav scrolled' : 'nav'}>
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