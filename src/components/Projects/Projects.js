import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import shop from "../../Assets/Projects/shop.png";
import food from "../../Assets/Projects/food.png";
import zoom from "../../Assets/Projects/zoom.png";
import bike from "../../Assets/Projects/bike.png";
import stackoverflow from "../../Assets/Projects/stackoverflow.png";
import url from "../../Assets/Projects/url.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading"> 
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shop}
              title="Shopping_Application"
              description="We try to create a platform where you can buy items without any difficulty. So we try to create a website called Shopping_App with almost all the features that can solve your problems while buying items. We have used MERN stack to make this project."
              link="https://github.com/NithiAnbu97/Shopping_Front"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              title="Recipe App"
              description="I have created this project for the Recipes. So basically this is a website which uses different data like different food variety in India. We have used MERN stack to make this project. "
              link="https://github.com/NithiAnbu97/Recipe-_Front"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zoom}
              title="Video-Chat-App"
              description="I have created this project for live video chatting. I have created this project using MERN stack and socket.io."
              link="https://github.com/NithiAnbu97/Zoom_Front"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bike}
              title="Bike-Blog_App"
              description="I have created this project for the Bikes. So basically this is a website which uses different data like different bike models in the world. We have used MERN stack to make this project."
              link="https://github.com/NithiAnbu97/Bike_Blog_App_Front"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stackoverflow}
              title="Stack-Over-Flow Clone"
              description="A responsive stack overflow clone with all CRUD operations for questions, answers, and comments along with important features like searching, voting, and tags. We have used MERN stack to make this project."
              link="https://github.com/NithiAnbu97/Hack-2-Frontend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={url}
              title="URL_Shortner"
              description="ShortURL is a url shortener to reduce a long link. Use our tool to shorten links and then share them, in addition you can monitor traffic statistics.  We have used MERN stack to make this project."
              link="https://github.com/NithiAnbu97/URL_Shortner_Front"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
