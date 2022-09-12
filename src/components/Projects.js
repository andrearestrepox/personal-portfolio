



function Projects() {
    const projects = [
        {
            title: "Mom Meet Up",
            description: "Directory for single moms to meet",
            imgUrl: mom,
        },
        {
            title: "Mom Meet Up",
            description: "Directory for single moms to meet",
            imgUrl: mom,
        },
        {
            title: "Mom Meet Up",
            description: "Directory for single moms to meet",
            imgUrl: mom,
        },
    ];
   
    return(
        <Section className="project" id="project">
            <Constainer>
                <Row>
                <Col>
                    <h2>Projects</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> 
                </Col>

                </Row>
            </Constainer>
        </Section>
      
    
    )
}

export default Projects;