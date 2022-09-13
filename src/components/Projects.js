import { Tab, Col, Container, Row, Nav } from "react-bootstrap"
import { ProjectCard } from "../components/ProjectCard"
import she from "../assets/img/SWthumbnail.png"
import liquid from "../assets/img/liquidswirl.jpg"





export const Projects = () => {


    const projects = [
        {
            title: "Mom Meet Up",
            description: "Directory for single moms to meet",
            imgUrl: she,
        },
        {
            title: "Mom Meet Up",
            description: "Directory for single moms to meet",
            imgUrl: liquid,
        },
        {
            title: "Mom Meet Up",
            description: "Directory for single moms to meet",
            imgUrl: liquid,
        },
    ];

    return (
        
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <Tab.Container id="projects-tab" defaultActiveKey="first">
                            <Nav variant="pills" defaultActiveKey="/home">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        Tab Three
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
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
                                <Tab.Pane eventKey="second">Loren Ipsum</Tab.Pane>
                                <Tab.Pane eventKey="third">Loren Ipsum</Tab.Pane>

                            </Tab.Content>
                        </Tab.Container>

                    </Col>

                </Row>
            </Container>
            <img className="background-img-right" src={liquid} />
        </section>
     


    )
}

export default Projects;