import React from "react";
import { useState, useEffect } from "react";
import "./home.css";
import { Row, Col } from "reactstrap";

const Header = () => {
  const [hideImage, setHideImage] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 200) {
      setHideImage(true);
    } else {
      setHideImage(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <Row>
        <Col md={6}>
          <img
            className={`img-fluid bounce fade-on-scroll ${
              hideImage ? "hide" : ""
            }`}
            src="/images/homepict.png"
            width="65%"
            alt="Home Image"
          ></img>
        </Col>
        <Col md={6}>
          <h2 className="title">Fanta</h2>
          <p className="text-justify">
            Fanta adalah minuman bersoda dengan rasa buah yang menyegarkan. Rasa
            yang paling terkenal adalah jeruk, tetapi Fanta juga hadir dalam
            berbagai varian rasa lainnya. Minuman ini sangat populer di seluruh
            dunia dan sering dinikmati sebagai minuman dingin.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
