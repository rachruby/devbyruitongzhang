import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/octLogo.png";
import projImg2 from "../assets/img/rewindLogo.png";
import projImg3 from "../assets/img/maeveLogo.jpg";
import projImg4 from "../assets/img/getTrashLogoFinalize.png";
import projImg5 from "../assets/img/campusLogoRec.png";
import projImg6 from "../assets/img/medicPadLogo.jpg";
import colorSharp2 from "../assets/img/skillBgs.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Octavius",
      description: "Stanford TreeHacks 2025; Octavius detects injuries and evaluates what next steps a combat medic should take",
      imgUrl: projImg1,
    },
    {
      title: "Rewind",
      description: "InterSystems AI Challenge 3rd Place @ HackMIT 2024 memory preservation AR-integrated web app for people with dementia",
      imgUrl: projImg2,
    },
    {
      title: "Maeve, your digital closet",
      description: "2nd Place Overall @ TechNova 2024",
      imgUrl: projImg3,
    },
    {
      title: "Get Trash",
      description: "3rd Place Overall @ Hack with AI 2024",
      imgUrl: projImg4,
    },
    {
      title: "Camp-us",
      description: "UI/UX Design Award @ TechNova 2023",
      imgUrl: projImg5,
    },
    {
      title: "MedicPad",
      description: "Third Place Overall @ The Queen's School of Computing Programming Challenge 2022",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Project Portfolio</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Project Portfolio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Work Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Extracurriculars/Hobbies</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>I was part of the FIRST Robotics Canada National Youth Council in which I organized many robotics events for FIRST students ranging from 6-18</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p> I love playing table tennis competitively, I was part of the provincial team from 2017-2019</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-centre" src={colorSharp2}></img>
    </section>
  )
}
