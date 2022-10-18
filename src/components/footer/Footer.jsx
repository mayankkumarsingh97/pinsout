import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';



import "./footer.Module.css"
export default function Footer() {
    return (
        <>
            <Container fluid className='footer_bg'>
                <footer>
                    <Container>
                        <Row className='align-items-center justify-content-center'>
                            <Col md={4}>
                                <div className="sign_up">
                                    <h6 className='text-white py-2'>
                                        <h6 className='lead'>Sign Up Today and get</h6>
                                        <h6 className='lead'>Rs. 200 off  On your first order.</h6></h6>
                                    <input type="email" placeholder='Enter your e-mail' />
                                    <div className="d-flex">
                                        <div className="social_media my-3">
                                            <FacebookIcon /> <InstagramIcon /> <YouTubeIcon /> <TwitterIcon /> <PinterestIcon />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <ul className='d-flex justify-content-md-around'>
                                    <div>
                                        <li className='heading'>Collection &nbsp;</li>
                                        <li><a href="#Clothing">Clothing</a></li>
                                        <li><a href="#Tops">Tops</a></li>
                                        <li><a href="#Sweaters">Sweaters</a></li>
                                        <li><a href="#Dress">Dress</a></li>
                                        <li><a href="#Shoes">Shoes</a></li>
                                    </div>
                                    <div>
                                        <li className='heading'>Company</li>
                                        <li><a href="#Careers">Careers at Toppers</a></li>
                                        <li><a href="#">About Toppers</a></li>
                                        <li><a href="#">Contact us</a></li>
                                        <li><a href="#">Gifts Cards</a></li>
                                        <li><a href="#">Blog</a></li>
                                    </div>
                                </ul>

                            </Col>
                            <Col md={4}>
                                <ul className='d-flex justify-content-md-around'>
                                    <div>
                                        <li className='heading'>Need Help</li>
                                        <li><a href="#order">order status</a></li>
                                        <li><a href="#Shipping">Shipping</a></li>
                                        <li><a href="#">FAQ'S & Help</a></li>
                                        <li><a href="#">Tems and Conditions</a></li>
                                        <li><a href="#">Tems and Conditions</a></li>
                                    </div>
                                    <div>
                                        <li className='heading'>Exclusive Servies</li>
                                        <li><a href="#">Call us 8899889988</a></li>
                                        <li><a href="#">Send us email</a></li>
                                        <li><a href="#">See our store</a></li>

                                    </div>
                                </ul>
                            </Col>
                        </Row>
                        <div className="border-bottom"></div>
                        <Row>
                            <Col md={12}>
                                <div className="lead text-white my-2" style={{fontSize:"10px"}}>
                                    @&nbsp;2022 <b className=''>Toopers United</b>.All rights Reserved.
                                </div>
                            </Col>
                        </Row>
                    </Container>

                </footer>
            </Container>
        </>
    )
}
