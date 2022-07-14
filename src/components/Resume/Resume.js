import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import ResumePdf from "../../Assets/Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={ResumePdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Resume
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Fresher"
              date=""
              content={[
                " ",
              ]}
            />
            {/* <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Digital Marketing Executive [Technovanza-2020]"
              content={[
                "Planning, monitoring, and managing the organization presence on social media",
              ]}
            />
            <Resumecontent
              title="Public Relation Executive [Technovanza-2020]"
              content={[
                "Work with the PR Manager to create, manage, execute and evaluate all Guest Lectures at Technovanza.",
              ]}
            /> */}
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="BE-Civil Engineering [Sakthi Mariamman Engineering College, Chennai] "
              date="2015 - 2019"
              content={[`CGPA: 7.2`]}
            />
            <Resumecontent
              title="12th BOARD [Vidya Vikas Boys Higher Secondary School, Tiruchengodu]"
              date="2015"
              content={["Precentage: 80%"]}
            />
            <Resumecontent
              title="10th BOARD [Sri Ayyan Vidyasharam High School, R.K.Pet]"
              date="2013"
              content={["Precentage: 94%"]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                "Won a Technical Level Symposium 2018",
                "Completed Full Stack Development Course in - GUVI",

              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={ResumePdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Resume
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
