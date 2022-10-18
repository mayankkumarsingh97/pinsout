import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import GradeIcon from '@mui/icons-material/Grade';
import shoes_bg from "../img/shoes_bg.png"

import cap_bg from "../img/cap_bg.png"
import jeans_bg from "../img/jeans_bg.png"
import child_01 from "../img/child_01.png"
import child_02 from "../img/child_02.png"
import icici from "../img/icici_bank.png"
import slicePay from "../img/slicePay.png"

import running_leg_bg from "../img/running_leg_bg.png"
import "./Looks.Module.css"




export default function Looks() {
    return (
        <>
            <Container className='py-md-1 my-md-0'>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <div className="what_makes_us_diff">
                            <h2>Looks You'll Love.</h2>
                            <p>Top sale this week.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={3} xs={6}>
                        <div className="parentContainer">
                            <div className="img_continer">
                                <img src={shoes_bg} alt="" />
                                <div className="d_none_container">
                                    <button className='add_to_cart_btn'>Add to Cart</button>
                                </div>
                                <div className="cQf">
                                    <a href="#favrate"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Faverates"><FavoriteBorderIcon /></span></a>
                                    <a href="#quickview"><span data-bs-toggle="tooltip" data-bs-placement="left" title="QuickView"><RemoveRedEyeIcon /></span></a>
                                    <a href="#compare"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Compare"><CompareArrowsIcon /></span></a>

                                </div>
                            </div>
                            <div className='mt-md-0 mt-2'>
                                <small className='title'>Combo Tenis Shorts and Tee</small> <br />
                                <small className='rupee'>Rs. &nbsp;16,00</small> <span className='dis_price'>&nbsp;&nbsp;<small>Rs.22,00</small></span> <br />
                                <small className='rating'>
                                    <div className="d-flex">
                                        <small><GradeIcon /> <GradeIcon /> <GradeIcon /> <GradeIcon /> <span className='review_rating'>2.2k Reviews</span></small>
                                    </div>
                                </small>
                            </div>
                        </div>
                    </Col>

                    <Col md={3} xs={6}>
                        <div className="parentContainer">
                            <div className="img_continer">
                                <img src={running_leg_bg} alt="" />
                                <div className="d_none_container">
                                    <button className='add_to_cart_btn'>Add to Cart</button>
                                </div>
                                <div className="cQf">
                                    <a href="#favrate"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Faverates"><FavoriteBorderIcon /></span></a>
                                    <a href="#quickview"><span data-bs-toggle="tooltip" data-bs-placement="left" title="QuickView"><RemoveRedEyeIcon /></span></a>
                                    <a href="#compare"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Compare"><CompareArrowsIcon /></span></a>

                                </div>
                            </div>
                            <div className='mt-md-0 mt-2'>
                                <small className='title'>Combo Tenis Shorts and Tee</small> <br />
                                <small className='rupee'>Rs. &nbsp;16,00</small> <span className='dis_price'>&nbsp;&nbsp;<small>Rs.22,00</small></span> <br />
                                <small className='rating'>
                                <div className="d-flex">
                                        <small><GradeIcon /> <GradeIcon /> <GradeIcon /> <GradeIcon />  <span  className='review_rating'>2.3k Reviews</span></small>
                                    </div>
                                </small>
                            </div>
                        </div>
                    </Col>


                    <Col md={3} xs={6}>
                        <div className="parentContainer">
                            <div className="img_continer">
                                <img src={jeans_bg} alt="" />
                                <div className="d_none_container">
                                    <button className='add_to_cart_btn'>Add to Cart</button>
                                </div>
                                <div className="cQf">
                                    <a href="#favrate"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Faverates"><FavoriteBorderIcon /></span></a>
                                    <a href="#quickview"><span data-bs-toggle="tooltip" data-bs-placement="left" title="QuickView"><RemoveRedEyeIcon /></span></a>
                                    <a href="#compare"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Compare"><CompareArrowsIcon /></span></a>

                                </div>
                            </div>
                            <div className='mt-md-0 mt-2'>
                                <small className='title'>Combo Tenis Shorts and Tee</small> <br />
                                <small className='rupee'>Rs. &nbsp;16,00</small> <span className='dis_price'>&nbsp;&nbsp;<small>Rs.22,00</small></span> <br />
                                <small className='rating'>
                                <div className="d-flex">
                                        <small><GradeIcon /> <GradeIcon /> <GradeIcon /> <GradeIcon /> <span  className='review_rating'>6.8k Reviews</span></small>
                                    </div>
                                </small>
                            </div>
                        </div>
                    </Col>



                    <Col md={3} xs={6}>
                        <div className="parentContainer" id='thelast'>
                            <div className="img_continer">
                                <img src={cap_bg} alt="" />
                                <div className="d_none_container">
                                    <button className='add_to_cart_btn'>Add to Cart</button>
                                </div>
                                <div className="cQf">
                                    <a href="#favrate"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Faverates"><FavoriteBorderIcon /></span></a>
                                    <a href="#quickview"><span data-bs-toggle="tooltip" data-bs-placement="left" title="QuickView"><RemoveRedEyeIcon /></span></a>
                                    <a href="#compare"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Compare"><CompareArrowsIcon /></span></a>

                                </div>
                            </div>
                            <div className='mt-md-0 mt-2'>
                                <small className='title'>Combo Tenis Shorts and Tee</small> <br />
                                <small className='rupee'>Rs. &nbsp;16,00</small> <span className='dis_price'>&nbsp;&nbsp;<small>Rs.22,00</small></span> <br />
                                <small className='rating'>
                                <div className="d-flex">
                                        <small><GradeIcon /> <GradeIcon /> <GradeIcon /> <GradeIcon />  <span  className='review_rating'>2.9k Reviews</span></small>
                                    </div>
                                </small>
                            </div>
                        </div>
                    </Col>
                </Row>


                {/* Tow child icic bank and other */}
                <Row className='my-3 py-2 justify-content-between align-items-center'>
                    <Col md={6} >
                        <div className="child_01">
                            <div className='credit_cart text-white'>
                            <h6>Festive Bonanza</h6>
                            <h4><img src={icici} alt="icici" /></h4>
                            <h6>10% Instant Discount <br />
                            on ICICI Bank Credit Cards.
                            </h6>
                            <hr />
                            </div>
                            <img src={child_01} alt="" />
                        </div>
                    </Col>

                    <Col md={6}  className="my-md-0 mt-4">
                        <div className="child_01 child_02">
                            <div className='credit_cart text-white'>
                            <h6>Buy stuff now and get it</h6>
                            <h4><img src={slicePay} alt="" /></h4>
                            <h6>10% Instant Discount <br />
                            Minimum purchase amount Rs. 1000.
                            </h6>
                            <hr />
                            </div>
                            <img src={child_02} alt="" />
                        </div>
                    </Col>
                   
                </Row>
            </Container>
        </>
    )
}
