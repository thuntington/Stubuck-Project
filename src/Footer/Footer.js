import React from 'react';
import './footer1.css';
import face from '../Assets/Icons/icon-facebook.png';
import insta from '../Assets/Icons/icon-instagram.png';
import linkd from '../Assets/Icons/icon-linkedin.png';
import twitt from '../Assets/Icons/icon-twitter.png';
import pin from '../Assets/Icons/icon-pinterest.png';

const Footer = () => {
    return (
      <div className="Footer">
        <div className='topRow'>
          <div className='help'>
              <h2>Help</h2>
              <ul className='helpHead'>
                <li>My account</li>
                <li>Stu Cards</li>
                <li>Stu Rewards</li>
                <li>Shipping & Returns</li>
                <li>Current Offers</li>
                <li>Contact Us</li>
              </ul>
          </div>
          <div className='compInfo'>
            <h2>Company Info</h2>
              <ul className='infoHead'>
                <li>Code Ethics</li>
                <li>Responsible Sourcing</li>
                <li>Supply Chain</li>
                <li>Limited Partners</li>
                <li>Office Coffee</li>
              </ul>
          </div>
          <div className='share'>
            <h2>Share</h2>
            <img alt='face' src={face}/>
            <img alt='insta' src={insta}/>
            <img alt='linkd' src={linkd}/>
            <img alt='twitt' src={twitt}/>
            <img alt='pin' src={pin}/>
          </div>
        </div>
          <div className='about'>
          <h2>About Us</h2>
              <ul className='aboutHead'>
                <li>Join Stu</li>
                <li>Social Responsibility</li>
                <li>Our People</li>
                <li>Newsroom</li>
              </ul>
          </div>
      </div>
    );
  }


export default Footer;