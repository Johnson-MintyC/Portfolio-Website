import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";

//Icons import
import jscript from "../assets/img/icons/javascript.svg"
import css3 from "../assets/img/icons/css3.svg"
import react from "../assets/img/icons/react.svg"
import nodejs from "../assets/img/icons/node-js.svg"
import python from "../assets/img/icons/python.svg"
import postgresql from "../assets/img/icons/postgresql.svg"
import mongodb from "../assets/img/icons/mongodb.svg"
import html5 from "../assets/img/icons/html-5.svg"
import expic from "../assets/img/icons/express-logo.png"
import flaskic from "../assets/img/icons/flask-logo-png-transparent2.png"

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 14
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 10
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 6
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 4
        }
      };

    return (
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skills-bx">
                        <h2>Skills</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repudiandae ratione, placeat repellendus inventore vel dignissimos excepturi. Culpa nobis eligendi reprehenderit illo quasi, repellat quam. Ex consequatur doloremque provident omnis.</p>
                        <h5 className="skill-sub-header">FrontEnd</h5>
                        <Carousel responsive={responsive} infinite={true} className="skills-slider">
                            <div className="item">
                                <img src={react} alt="Image" />
                                <p>React JS</p>
                            </div>
                            <div className="item">
                                <img src={nodejs} alt="Image" />
                                <p>Node JS</p>
                            </div>
                            <div className="item">
                                <img src={expic} alt="Image" />
                                <p>Express</p>
                            </div>
                            <div className="item">
                                <img src={html5} alt="Image" />
                                <p>HTML</p>
                            </div>
                            <div className="item">
                                <img src={css3} alt="Image" />
                                <p>CSS</p>
                            </div>
                        </Carousel>
                        <h5 className="skill-sub-header">BackEnd</h5>
                        <Carousel responsive={responsive} infinite={true} className="skills-slider">
                            <div className="item">
                                <img src={jscript} alt="Image" />
                                <p>JavaScript</p>
                            </div>
                            <div className="item">
                                <img src={python} alt="Image" />
                                <p>Python</p>
                            </div>
                            <div className="item">
                                <img src={postgresql} alt="Image" />
                                <p>PostgreSQL</p>
                            </div>
                            <div className="item">
                                <img src={mongodb} alt="Image" />
                                <p>MongoDB</p>
                            </div>
                            <div className="item">
                                <img src={flaskic} alt="Image" />
                                <p>Flask</p>
                            </div>
                        </Carousel>

                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Skills