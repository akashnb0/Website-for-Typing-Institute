import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="foot">        
            <p className=" d-flex align-items-center gap-1">
              <i></i> Copyright © 2023 | Saraswathi Technical Institute | All Rights Reserved
            </p>          
      </div>
    </footer>
  );
};

export default Footer;
