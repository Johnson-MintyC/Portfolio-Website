// import { useEffect, useState } from "react"
import {Col, Row, Container} from "react-bootstrap"
// import { ArrowRightCircle } from "react-bootstrap-icons"
//Bobbing Image
import headerImg from "../assets/img/anidog.png"


const Banner = () => {
    //track index for which word in list to display
    // const [loopNum, setLoopNum] = useState(0);
    // //for if the word is being typed in state(false) or deleted out state(true)
    // const [isDeleting, setIsDeleting] = useState(false)
    // //List of words to rotate through
    // const toRotate = ["Web Developer", "Full Stack Capable", "Dog Walker"]
    // //current state of the word being looped and built
    // const [text, setText] = useState("")
    // //Letter transition animation timing
    // const period = 2000;
    // //timing for each letter being added, random for slight varying of type speed 
    // const [delta, setDelta] = useState(300 - Math.random()*100)

    // useEffect(()=>{
    //     //update text and check state, every delta, run on each letter change
    //     let ticker = setInterval(()=>{
    //         tick();
    //     }, delta)
    //     return () => {clearInterval(ticker)}
    // }, [text])

    // //on text change, check state and update the text
    // const tick = () => {
    //     //index of current rotate word, and current word state, need modulo to as loopNum will exceed rotate length
    //     let i = loopNum % toRotate.length
    //     let fullText = toRotate[i]
    //     let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1)

    //     setText(updatedText)

    //     //if delete state, shorten by calling the prevState delta and halving to simulate accelerating deletes
    //     if (isDeleting) {
    //         setDelta(prevDelta => prevDelta/2)
    //     }
    //     //if loop reaches fulltext, set to delete state, reset the delta timing
    //     if (!isDeleting && updatedText === fullText) {
    //         setIsDeleting(true)
    //         setDelta(period)
    //     } 
    //     //delete loop reaches empty, set delete to false, move on to next word
    //     else if (isDeleting && updatedText === "") {
    //         setIsDeleting(false)
    //         setLoopNum(loopNum + 1)
    //         setDelta(500)
    //     }
    // }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`I'm Johnson Cho `}<br></br><span className="wrap">Software Engineer</span></h1>
                        <p className="about-me">I'm a Full Stack Developer located in Melbourne, recently migrated back from New Zealand to pursue a career in Software Engineering. 
                            <br></br>
                            This career change comes from years in working in the Fintech industry, organizing day to day workflows and helping solve and break down complex problems for my team and organization. 
                            <br></br>
                            Excited to keep learning and coding, aswell as Mooncake my trusty coding companion 
                        </p>
                        {/* <button onClick={()=>console.log("wahatever")}>Let's Connect <ArrowRightCircle size={25}/></button> */}
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner