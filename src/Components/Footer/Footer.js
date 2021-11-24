import React from 'react';
import copywrite from '../../images/new_logo_idea-02-removebg-preview.png'


const Footer = () => {
    return (
        <div style={{paddingTop:"20%", textAlign:"center"}}>
            <h3> Copyright By</h3>
            <img src={copywrite} width='450px' alt="" />
        </div>
    );
};

export default Footer;