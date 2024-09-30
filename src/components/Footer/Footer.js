import React from "react";
import { Row, Col } from "reactstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer id="footer">
        <div
          className="footer-bottom"
          style={{ backgroundColor: "black", padding: "20px 0" }}
        >
          <div className="container">
            <Row>
              <Col md={9}>
                <img src="/images/logo.png" alt="logo" width="200px" />
              </Col>
              <Col md={3}>
                <p style={{ color: "white" }}>
                  The Coca‑Cola Company <br />
                  Atlanta, Georgia, Amerika Serikat <br />
                  Phone: 0800 100 2653 <br />
                  <a
                    href="mailto:info@coca-cola.co.id"
                    target="_blank"
                    style={{ color: "white" }}
                  >
                    Email: info@coca-cola.com
                  </a>
                </p>
              </Col>

              <Col md={12}>
                <p
                  style={{
                    color: "gray",
                    fontSize: "12px",
                    textAlign: "center",
                    marginTop: "20px",
                  }}
                >
                  © {currentYear} The Coca‑Cola Company. All rights reserved.
                  Developed by Fauzi Saputra.
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
