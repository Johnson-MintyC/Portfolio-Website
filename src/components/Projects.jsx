import { Container, Row } from "react-bootstrap"

const Projects = () => {
    const projects = [
        {
            title: "Marketplace",
            description: "Design & Development",
            imgUrl: projImg1,
          },
          {
            title: "Coffee-Notes",
            description: "Design & Development",
            imgUrl: projImg2,
          },
          {
            title: "Tic-Tac-Toe",
            description: "Design & Development",
            imgUrl: projImg3,
          }
    ]
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>Whateslgn;afdgna;jv aj </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Projects