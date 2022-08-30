import { Col } from "react-bootstrap"

const ProjectCard = ({title, description, imgUrl, liveLink, gitLink}) => {
    return (
    <Col sm={6} md={4}>
        <div className="proj-imgbx"> 
            <img src={imgUrl} />
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
                <br/>
                <button>Link</button>
                <br/>
                <button>Github</button>
            </div>
        </div>
    </Col>)
}

export default ProjectCard