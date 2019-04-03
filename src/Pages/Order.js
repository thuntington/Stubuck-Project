import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SiteInfo from '../Footer/SiteInfo';
// import SelectBox from './Features/SelectBox';

// import CoffeeForm from './CoffeeForm';
import './order.css';

const Order = () => {
    return (
        <div className='orderForm'>
            <Header/>
            <form action='/createCoffee' method='POST'>
                <h2>Choose your Coffee</h2>
        <label>
          Pick your coffee:
          <select name='coffee'>
            <option value="cappucino">Cappucino</option>
            <option value="latte">Latte</option>
            <option value="mocha">Mocha</option>
            <option value="flat-white">Flat White</option>
            <option value="black-coffee">Black Coffee</option>
            <option value="frappe">Frappe</option>
            <option value="the-stu-brew">The Stu Bew</option>
          </select>
        </label>
        <label> How much sugar would you like?
          <select name='sugar'>
            <option value= '1'>1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <label> Choose your syrup?
          <select name='flavour'>
            <option value= 'none'>None</option>
            <option value="caramel">Caramel</option>
            <option value="hazelnut">Hazelnut</option>
            <option value="vanilla">vanilla</option>
          </select>
        </label>
        <input className='button' type='submit' ></input>
        </form>
                {/* <SelectBox
                    items={[
                        { value: 'Cappucino', id: 1 },
                        { value: 'Latte', id: 2 },
                        { value: 'Mocha', id: 3 },
                        { value: 'Flat White', id: 4 },
                        { value: 'Black Coffee', id: 5 },
                        { value: 'Frappe', id: 6 },
                        { value: 'The Stu Bew', id: 7 },
                    ]} 
                /> */}
                <Footer />
                <SiteInfo />
        </div>
    );
  }

export default Order;