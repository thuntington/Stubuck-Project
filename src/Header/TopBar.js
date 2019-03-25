import React from 'react';
import './topBar.css';

const TopBar = () => {
    return (
        <div>
            <div className='topBar'>
                <p>Free shipping on orders of £30+ | Use Code STULOVE > offer details</p>
            </div>
            <div className='store'>
                <p>Find nearest store</p>
            </div>
        </div>
    );
  }

export default TopBar;