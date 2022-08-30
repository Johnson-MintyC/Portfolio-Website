import { Container, Row, Col } from "react-bootstrap"
import ProjectCard from "./ProjectCard" 

import colorSharp2 from "../assets/img/color-sharp2.png"

import projImg1 from "../assets/projectss/tictactoe.png" 
import projImg2 from "../assets/projectss/coffeelog.png" 
import projImg3 from "../assets/projectss/tictactoe.png" 
import projImg4 from "../assets/projectss/dineroulette.png" 


const Projects = () => {
    const projects = [
        {
            title: "Dine-Roulette",
            description: "Randomly recommends a place to dine based on your selections,",
            imgUrl: projImg4,
        },
        {
            title: "Marketplace",
            description: "A secondhand markplace listing app",
            imgUrl: projImg3,
          },
          {
            title: "Coffee-Notes",
            description: "A coffee tasting journal",
            imgUrl: projImg2,
          },
          {
            title: "Tic-Tac-Toe",
            description: "a web hosted tic tac toe game",
            imgUrl: projImg1,
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
            </Container>
        </section>
    )
}

export default Projects