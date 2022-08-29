import { useState } from "react"
import { Container } from "react-bootstrap"
import contactImg from "../assets/img/contact-img.svg" 

const Container = () => {
    const initialDeets = {
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    }
    const [formDetails, setFromDetails] = useState(initialDeets)
    const [buttonText, setButtonText] = useState("Send")
    const [status, setStatus] = useState({})

    const onFormUpdate = (category, value) => {
        setFromDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = () => {}

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt ="Contact Us" />
                    </Col>
                    <Col md={6}>
                        <h2>Get in Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e)=>onFormUpdate("firstName", e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e)=>onFormUpdate("lastName", e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e)=>onFormUpdate("lastName", e.target.value)}/>
                                </Col>
                                <Col>
                                    <textarea row="6" value={formDetails.message} placeholder="Message" onChange={(e)=>onFormUpdate("message", e.target.value)}></textarea>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message && 
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default Container