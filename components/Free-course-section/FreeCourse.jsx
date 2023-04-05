import React from "react";
import { Container, Row, Col } from "reactstrap";

import courseImg01 from "../../assests/images/web-development.png";

import courseImg02 from "../../assests/images/Typewriting with hand img.jpg";
import courseImg03 from "../../assests/images/Typewriter black.jpg";

import courseImg04 from "../../assests/images/Typewriting with hand img.jpg";
import courseImg05 from "../../assests/images/Typewriter black.jpg";

import courseImg06 from "../../assests/images/Highspeed english.jpg";
import courseImg07 from "../../assests/images/Highspeed tamil.jpg";

import courseImg08 from "../../assests/images/pitman english cropped.jpg";
import courseImg09 from "../../assests/images/Shorthand tamil.jpg";

import courseImg10 from "../../assests/images/shorthandinteerr.jpg";

import courseImg11 from "../../assests/images/pitman english cropped.jpg";
import courseImg12 from "../../assests/images/Shorthand tamil.jpg";
import FreeCourseCard from "./FreeCourseCard";

import "./free-course.css";

const freeCourseData = [
  {
    id: "01",
    title: "Computer on Office Automation",
    imgUrl: courseImg01,
    students: 2,
    rating: 5,
  },
  {
    id: "02",
    title: "Typewriting English Junior",
    imgUrl: courseImg02,
    students: 40,
    rating: 5,
  },

  {
    id: "03",
    title: "Typewriting Tamil Junior",
    imgUrl: courseImg03,
    students: 20,
    rating: 5,
  },
  {
    id: "04",
    title: "Typewriting English Senior",
    imgUrl: courseImg04,
    students: 20,
    rating: 5,
  },
  {
    id: "05",
    title: "Typewriting Tamil Senior",
    imgUrl: courseImg05,
    students: 20,
    rating: 5,
  },
  {
    id: "06",
    title: "Typewriting English Highspeed",
    imgUrl: courseImg06,
    students: 20,
    rating: 5,
  },
  {
    id: "07",
    title: "Typewriting Tamil Highspeed",
    imgUrl: courseImg07,
    students: 20,
    rating: 5,
  },

  {
    id: "08",
    title: "Shorthand English Junior",
    imgUrl: courseImg08,
    students: 15,
    rating: 5
  },
  {
    id: "09",
    title: "Shorthand Tamil Junior",
    imgUrl: courseImg09,
    students: 10,
    rating: 5,
  },
  {
    id: "10",
    title: "Shorthand English Intermediate",
    imgUrl: courseImg10,
    students: 15,
    rating: 5
  },
  {
    id: "11",
    title: "Shorthand English Senior",
    imgUrl: courseImg11,
    students: 15,
    rating: 5
  },
  {
    id: "12",
    title: "Shorthand Tamil Senior",
    imgUrl: courseImg12,
    students: 15,
    rating: 5
  },
];

const FreeCourse = () => {
  return (
    <section id="courses">
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className="fw-bold">Our Courses</h2>
          </Col>

          {freeCourseData.map((item) => (
            <Col lg="3" md="4" className="mb-4" key={item.id}>
              <FreeCourseCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FreeCourse;
