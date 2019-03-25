import React from 'react';
import bckground from './StubucksHero.jpg'
import coffImg from './StubrewIcedCoffee.png'
import './body.css'

const Body = () => {
    return (
      <div className="section1">
        <img className='coffBack' alt='coffeeImg' src={bckground} />
        
        <div className='imgText'>
          <span className='love'><p>Love</p>your Stu</span>
          <p className='range'>Look at our range and choose the Stu that suits you.</p>
          <button className='chooseCoff'>Choose your coffee</button>
        </div>
        <div className='someNew'>Try something<p>new</p>?</div>
        
        <div className='section2'>
          <img className='coffIced' alt='coffeeImg' src={coffImg} />
          
          <div className='stubrew'>
            <h2>The new StuBrew</h2>
            <br/>
            <p>A delicious new nitro brew developed carefully on the darkside of the moon, instilled with the freshness of Stu himself.</p>
          </div>
        </div>
      </div>
    );
  }


export default Body;