import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SiteInfo from '../Footer/SiteInfo';
import SelectBox from './Features/SelectBox';

// import CoffeeForm from './CoffeeForm';
import './order.css';

const Order = () => {
    return (
        <div className='orderForm'>
            <Header/>
                <h2>Choose your Coffee</h2>
                <SelectBox
                    items={[
                        { value: 'Cappucino', id: 1 },
                        { value: 'Latte', id: 2 },
                        { value: 'Mocha', id: 3 },
                        { value: 'Flat White', id: 4 },
                        { value: 'Black Coffee', id: 5 },
                        { value: 'Frappe', id: 6 },
                        { value: 'The Stu Bew', id: 7 },
                    ]} 
                />
                <Footer />
                <SiteInfo />
        </div>
    );
  }

export default Order;