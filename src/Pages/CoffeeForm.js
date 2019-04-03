import React from 'react';
import './coffeeForm.css';

const CoffeeForm = () => {
    return (
    <div>
        <form action='/createCoffee' method='POST'>
            <label for="name">name: </label>
            <input className='box' name="name" type="text"></input>
            <br></br>
            <input type="submit"></input>
        </form>
    </div> 
    )
}
export default CoffeeForm;