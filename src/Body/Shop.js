import React from 'react';
import buyCoff from './buyCoffee.jpg'
import buyTea from './buyTea.jpg'
import buyEquip from './buyEquipment.png'
import './shop.css';

const Shop = () => {

    return (
        <div className='shop'>
            <div className='shopCoffee'>
                <img alt='buyCoff' src={buyCoff} />
                <h2>Shop Coffee</h2>
                <hr></hr>
                <p>Hand-roasted coffee, delivered fresh for ultimate flavour.</p>
            </div>
            <div className='shopTea'>
                <img alt='buyTea' src={buyTea} />
                <h2>Shop Tea</h2>
                <hr></hr>
                <p>Our finest selection of premium whole leaf tea.</p>
            </div>
            <div className='shopEquip'>
                <img alt='buyEquip' src={buyEquip} />
                <h2>Shop Equipment</h2>
                <hr></hr>
                <p>Brewers and presses for making the perfect Stu at home.</p>
            </div>
        </div>
    );
  }

export default Shop;