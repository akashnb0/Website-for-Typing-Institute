import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Address",
    desc: "275/A3, RAJA NAGER, PASUPATHIPALAYAM POST, KARUR - 639004",
    icon: "ri-map-pin-line",
  },
  {
    title: "Email",
    desc: "saraswathitec@gmail.com",
    icon: "ri-mail-line",
  },

  {
    title: "Contact",
    desc: "+91 8072445317, +91 8220093377",
    icon: "ri-contacts-line",
  },
];

const Features = () => {
  return (
    <section className="featurebg" id="contact">
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
