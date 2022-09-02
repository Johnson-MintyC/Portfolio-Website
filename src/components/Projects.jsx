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
            description: "Randomly recommends a place to dine based on your selections, opportunity to integrate Python with JavaScript",
            imgUrl: projImg4,
            techDesc: "Python Flask ReactJS postgreSQL HTML CSS",
            liveLink: "https://github.com/Johnson-MintyC/dine-roulette",
            gitLink: "https://github.com/Johnson-MintyC/dine-roulette"
        },
        {
            title: "Marketplace",
            description: "A secondhand marketplace app, A 3 person group project experiencing developing, planning and syncing code as a team",
            imgUrl: projImg3,
            techDesc: "ReactJS Express NodeJS MongoDB Cloudinary Heroku HTML CSS",
            liveLink: "https://jbemarketplace.herokuapp.com/marketplace",
            gitLink: "https://github.com/Johnson-MintyC/Group-Project"
          },
          {
            title: "Coffee-Notes",
            description: "A coffee tasting journal, implementing RESTful apis and CRUD functionality",
            imgUrl: projImg2,
            techDesc: "NodeJS Express EJS MongoDB Cloudinary Heroku HTML CSS",
            liveLink: "https://coffee-notes-journal.herokuapp.com/",
            gitLink: "https://github.com/Johnson-MintyC/Coffee-Notes"
          },
          {
            title: "Tic-Tac-Toe",
            description: "a web hosted tic tac toe game, built with JavaScript!",
            imgUrl: projImg1,
            techDesc: "HTML CSS JavaScript",
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