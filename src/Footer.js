import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Footer extends React.Component {
  
    render() {
        return (
           
          <div>
                
      <Row className="footer">
        <Col className="right col-md-6">
          <p>About Us</p>
          <p>Solutions</p>
          <p>Insights</p>
          <p>The Ornico Story</p>
        </Col>
        <Col className="center col-md-6">
          <p>OrnicoGroup B-BBEE Certificate</p>
          <p>Preferred payment terms</p>
          <p>for EMEs and QSEs</p>
        </Col>
        <Col className="left col-md-6">
          <p>Become an #Ornican</p> 
          <p>Ornico Community</p>
          <p>Contact Us</p>
        <ul className="social left">
        <i class="fa fa-facebook-square"></i>
        <i class="fa fa-linkedin-square"></i>
        <i class="fa fa-twitter-square"></i>
        <i class="fa fa-youtube-square"></i>
        <i class="fa fa-instagram"></i>
       </ul>
        </Col>
        
       </Row>
       
       </div>

       
        )
    }
}