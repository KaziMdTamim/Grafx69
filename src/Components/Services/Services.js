import React from 'react';
import partner_1 from '../../images/partner-1.jpg';
import partner_2 from '../../images/partner-2.jpg';
import partner_3 from '../../images/partner-3.jpg';
import partner_4 from '../../images/partner-4.jpg';
import partner_5 from '../../images/partner-5.jpg';
import partner_6 from '../../images/partner-6.jpg';
import './Services.css';

const Services = () => {
    return (
        <div>
            <h1  style={{color:'midnightblue', textAlign:"center"}}>Our Rang Services</h1>
            <ul style={{color:'green', paddingLeft:"30%"}}> 
              <div style={{paddingTop:'2%'}}>
              <li><h3>Corporate Branding & Identity</h3></li>
                <li><h3>Print & packing Design</h3></li>
                <li><h3>Below The Line Advertising</h3></li>
                <li><h3>Web & Multimedia</h3></li>
              </div>
            </ul>
            <div>
                <h1 style={{color:'midnightblue', textAlign:"center", paddingTop:"2%", paddingBottom:"2%"}}>Hands On Hands Partnership</h1>
                </div>
               <div className="partners">
                   <img style={{width:"300px", height:'250px'}} src={partner_1} alt="" />
                   <img style={{width:"287px", height:'250px'}} src={partner_2} alt="" />
                   <img style={{width:"350px", height:'250px'}} src={partner_3} alt="" />
                   </div>
                   <div className="partners-2">
                   <img style={{width:"300px", height:'250px'}} src={partner_4} alt="" />
                   <img style={{width:"288px", height:'250px'}} src={partner_5} alt="" />
                   <img style={{width:"350px", height:'250px'}} src={partner_6} alt="" />
               </div>
            </div>
        // </div>
    );
};

export default Services;