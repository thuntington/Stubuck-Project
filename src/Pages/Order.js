import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SiteInfo from '../Footer/SiteInfo';
import SelectBox from './Features/SelectBox';
import './order.css';

const Order = () => {
    return (
        <div className='orderForm'>
            <Header/>
            <form>
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
                <h2>Choose your sugar</h2>
                <SelectBox 
                    items={[
                        { value: '1', id: 1 },
                        { value: '2', id: 2 },
                        { value: '3', id: 3 },
                    ]}
                />
                <h2>Choose your flavourings</h2>
                <SelectBox 
                    items={[
                        { value: 'None', id: 1 },
                        { value: 'Caramel', id: 2 },
                        { value: 'Vanilla', id: 3 },
                        { value: 'Hazelnut', id: 3 },
                    ]}
                />
                <button type='submit'>Confirm Order</button>
                <Footer />
                <SiteInfo />
                
            </form>
        </div>
    );
  }

export default Order;