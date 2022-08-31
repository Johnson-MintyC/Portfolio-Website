import { Container, Row, Col } from "react-bootstrap"
import ProjectCard from "./ProjectCard" 

import projImg1 from "../assets/projectss/tictactoe.png" 
import projImg2 from "../assets/projectss/coffeelog.png" 
import projImg3 from "../assets/projectss/jbemarket.png" 
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
            liveLink: "https://jbemarketplace.herokuapp.com/marketplace",
            gitLink: "https://github.com/Johnson-MintyC/Group-Project"
          },
          {
            title: "Coffee-Notes",
            description: "A coffee tasting journal",
            imgUrl: projImg2,
            liveLink: "https://coffee-notes-journal.herokuapp.com/",
            gitLink: "https://github.com/Johnson-MintyC/Coffee-Notes"
          },
          {
            title: "Tic-Tac-Toe",
            description: "a web hosted tic tac toe game",
            imgUrl: projImg1,
            liveLink: "https://johnson-mintyc.github.io/TicTacToe-Project/",
            gitLink: "https://github.com/Johnson-MintyC/TicTacToe-Project"
          }
    ]
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>These are some projects I've created or contributed too, watch this space for new projects!</p>
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