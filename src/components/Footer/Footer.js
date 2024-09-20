import React from "react";
import { Row, Col } from "reactstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer id="footer">
        <div className="footer-bottom" style={{ backgroundColor: "black" }}>
          <div className="container">
            <Row>
              <Col md={6}>
                <img src="/images/logo.png" alt="logo" width="200px"></img>
              </Col>
              <Col md={9}>
              <h6 style={{ color: "white" }}>© 2024 The Coca‑Cola Company. All rights reserved.</h6>
              </Col>
              <hr className="divider" style={{ color: "white" }}></hr>
          
            </Row>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
