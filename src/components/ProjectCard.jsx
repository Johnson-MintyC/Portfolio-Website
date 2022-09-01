import { Col, Container } from "react-bootstrap"

const ProjectCard = ({title, description, imgUrl, altText, techDesc, liveLink, gitLink}) => {
    return (
    <Col sm={6} md={4}>
        <div className="proj-imgbx"> 
            <img src={imgUrl} alt={altText}/>
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
                <p>{techDesc}</p>
                <Container>
                    <a href={liveLink} without rel="noopener noreferrer" target="_blank">
                        <button className="card-buttons">Link</button>
                    </a>
                    <a href={gitLink} without rel="noopener noreferrer" target="_blank">
                        <button className="card-buttons">Github</button>
                    </a>
                </Container>
            </div>
        </div>
    </Col>)
}

export default ProjectCard