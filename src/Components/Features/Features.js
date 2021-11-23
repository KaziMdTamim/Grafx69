import React from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';

const Features = () => {
    return (
        <div className='poster'>
            <h1 style={{color:"green", paddingTop:"30px"}}>Our Extended Features</h1>
            <CardGroup>
  <Card>
    <Card.Img variant="top" src="https://i.ibb.co/HFsvwZm/night-show-poster.jpg" height='60%' />
    <Card.Body>
      <Card.Title>Drama Poster <br />
          <sub>a social awareness drama</sub></Card.Title>
      <Card.Text>
        <p>Design for Night Show - নাইট শো</p>
        {/* <br /> */}
        <p>An entertainment Drama,here's our fanmade poster for this drama.</p>
        {/* <br /> */}
        <p>Directed by Muhammad Miftah Anaan</p>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://i.ibb.co/6RmGpbn/shopner-naika-poster.jpg" height='60%'/>
    <Card.Body>
      <Card.Title>Drama Poster <br />
          <sub>a social awareness drama</sub></Card.Title>
      <Card.Text>
      <p>Design for Shopner Nayika - স্বপ্নের
          নায়িকা
      </p>
        {/* <br /> */}
        <p>A Social Awareness Drama,Here's Our Fanmade Poster For This Drama</p>
        {/* <br /> */}
        <p>Directed by Rafat Mozumder Rinku</p>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://i.ibb.co/zQNFqhh/shonkoch-poster.jpg" height='60%' />
    <Card.Body>
      <Card.Title>Film Poster <br />
            <sub>a social awareness film advertising video</sub>
      </Card.Title>
      <Card.Text>
       <p>Shongkoch is a social awarness film advertising video whch is presented by Bondhu Time</p>
       <p>This is a poster indicating to thriller vibes where hide a social awareness about girl's periods</p>
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
        </div>
    );
};

export default Features;