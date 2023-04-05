import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

import img from "../../assests/images/testimonial01.png";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
              <div className="testimonial__img w-50">
                <img src={img} alt="" className="w-100" />
              </div>

              <div className="testimonial__content w-50">
                <h2 className="mb-4">Our Students Voice</h2>

                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent Coaching
                      </h6>
                      <p>
                      Saraswathi Technical institute has exceeded my expectations. The courses were well-structured and the instructors were knowledgeable and supportive. I feel confident in my typing abilities and would highly recommend this institute to anyone looking to improve their typing skills.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Ram</h6>
                        <p>Karur, Tamil Nadu</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Well Experienced Master
                      </h6>
                      <p>
                      Thanks to Saraswathi Technical institute, I aced my COA exam with ease! The top-notch instruction and resources provided were invaluable in my success. I couldn't have done it without you! I would highly recommend this institute to all those who are passionate in learning Computer on Office Automation.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Jhaan</h6>
                        <p>Karur, Tamil Nadu</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials & Masters
                      </h6>
                      <p>
                      Saraswathi Technical institute with its exceptional type masters helped me achieve a distinction in both English and Tamil typing exams. The experience and expertise of the instructors truly made all the difference. I'm grateful for the valuable skills and knowledge I gained during my time at your institute.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Raj</h6>
                        <p>Karur, Tamil Nadu</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
