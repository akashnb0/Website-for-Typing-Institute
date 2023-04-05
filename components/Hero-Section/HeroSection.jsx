import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/TypeGIF.gif";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section id="home">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Welcome to <br/>Saraswathi Technical Institute
              </h2>
              <h3>Approval Number: 12814</h3>
              <p className="mb-5">
              A Government-approved Institute of the Directorate of Technical Education (DOTE). We offer a range of courses, including Typewriting, Computer on Office Automation, and Shorthand, designed to equip our students with the skills and knowledge they need to succeed in today's fast-paced world. We are committed to providing a high-quality learning experience, with dedicated faculty and state-of-the-art facilities to support our students' growth and development.
              </p>
            </div>
            <div className="search">
              <input type="text" placeholder="Type here" />
              <button className="btn">Search</button>
            </div>
          </Col>
         
          <Col  lg="6" md="6" >
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
         
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
