import { Col, Container } from "react-bootstrap"

const ProjectCard = ({title, description, imgUrl, altText, liveLink, gitLink}) => {
    return (
    <Col sm={6} md={4}>
        <div className="proj-imgbx"> 
            <img src={imgUrl} alt={altText}/>
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
                <Container>
                    <button className="vvd">Link</button>
                    <button className="vvd">Github</button>
                </Container>
            </div>
        </div>
    </Col>)
}

export default ProjectCard