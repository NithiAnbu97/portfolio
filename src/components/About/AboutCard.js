import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nithiyanantham S A </span>
            from <span className="purple">Mahankalikapuram, Tiruvallur</span>
            <br />I am  pursuing full stack development course at GUVI, Chennai. I'm{" "}
            <b className="purple"> MERN Stack developer</b> and
            <b className="purple"> Competative Programming enthusiast.</b>
            <br />I am looking forward to gain competency and exposure in{" "}
            <b className="purple">
              Full Stack Development.
            </b>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Learning Something New
            </li>
            <li className="about-activity">
              <ImPointRight /> Riding
            </li>
            <li className="about-activity">
              <ImPointRight /> Badminton
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "#14FFEC", opacity: 0.7 }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">NithiAnbu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
