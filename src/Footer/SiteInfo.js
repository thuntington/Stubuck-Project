import React from 'react';
import './siteInfo.css';


const SiteInfo = () => {
    return (
      <div className="siteInfo">
        <div className='address'>
            <ul>
                <li>Stubucks Chester</li>
                <li>Cheshire</li>
                <li>Since 2019</li>
            </ul>
        </div>
        <div className='terms'>
            <ul>
                <li>Stubucks Coffee | Privacy Policy | Terms of Service</li>
                <li>Stubucks is not a registered trademark, infact it was just something Stuart made Dan make even though he didn't have any spare time. But he likes designing stuff so that's OK.</li>
            </ul>
        </div>
      </div>
    );
  }


export default SiteInfo;