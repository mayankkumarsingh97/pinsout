import Container from 'react-bootstrap/Container';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import shoes from '../img/shoes.png'
import globes from '../img/globes.png'
import shooks from '../img/shooks.png'
import ball from '../img/ball.png'
import sports_bag from '../img/sports_bag.png'
import "./games.Module.css"


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 6
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
export default function Games() {
    return (
        <>
            <Container>
                <Row className="justify-content-center mt-5">
                    <Col md={6}>
                        <div className="what_makes_us_diff">
                            <h2>Shop by Items</h2>
                            <p>Your game your rules.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className='py-3'>
                <Carousel responsive={responsive}>
                    <div className='d-flex justify-content-center'><img src={shoes} className="   im" alt="" /></div>
                    <div className='d-flex justify-content-center'><img src={globes} className="   im" alt="" /></div>
                    <div className='d-flex justify-content-center'><img src={shooks} className="   im" alt="" /></div>
                    <div className='d-flex justify-content-center'><img src={sports_bag} className="   im" alt="" /></div>
                    <div className='d-flex justify-content-center'><img src={shoes} className="   im" alt="" /></div>
                    <div className='d-flex justify-content-center'><img src={shooks} className="   im" alt="" /></div>
                    <div className='d-flex justify-content-center'><img src={shoes} className="   im" alt="" /></div>
                    <div className='d-flex justify-content-center'><img src={shoes} className="   im" alt="" /></div>
                    <div className='d-flex justify-content-center'><img src={ball} className="   im" alt="" /></div>
                </Carousel>
            </Container>


        </>
    )
}
