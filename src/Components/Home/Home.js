import React from 'react';
import './Home.css';
import img_src from '../../images/new_logo_idea-06-removebg-preview.png'
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className="body-element">
          <div className='inner'>
          <h1 className="hd-1" style={{color:'green',  fontFamily:'Courier New', paddingTop:"200px",  fontWeight:"500", fontSize:"300%", marginLeft:"50px"}}>Welcome To Home
              <br />
              <span>
                  We Are Grafx69 For You
              </span>
              <br />
              <Link to="/about" className="btn-link" style={{marginTop:"15px", backgroundColor:'khaki', color:'green', paddingtop:"20px", borderRadius:"15px"}}>Our Services</Link>
          </h1>
          </div>
          <div className='img-div'>
              <img src={img_src} width="680px" alt="" />
          </div>
        </div>
    );
};

export default Home;