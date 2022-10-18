import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./hero.Module.css"
export default function Hero() {
    return (
        <>
            <Container fluid>
                <Row>

                    <Col md={12} className="p-0">
                        <div className="bg_sports_img">

                            <Container>
                                <Row className='justify-content-between'>
                                    <Col md={12} >
                                        <Row className='justify-content-center '>
                                            <Col md={5}>
                                            <small className='text-white text-center d-none d-lg-block'>Free Delivery on orders above Rs. 1000, DON’T MISS <a href="">SHOP NOW</a></small> 
                                            </Col>
                                        </Row>
                                        <Row className='justify-content-center'>
                                            <Col md={5} className="">
                                            <small className='text-white text-center  d-md-none d-block py-2' style={{background:"black"}}>
                                                Free Delivery on orders above Rs. 1000, DON’T MISS <br /> <a href="">SHOP NOW</a></small> 
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md={7}>
                                        <div className="hero_yourway">
                                            <div className='offset-md-1 p-md-0 p-3'>
                                                <h1 className='text-white'>Play the game.</h1>
                                                <h1 className='text-white'>Your rules. <span className='yourway'>Your way</span></h1>
                                                <div className='text-white my-md-3 my-2 tagline'>Made to fit uniforms that gives you the edge</div>
                                                <button>EXPLORE NOW</button>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={2}>
                                        {/* <h2 className='text-white'>Hello</h2> */}
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
