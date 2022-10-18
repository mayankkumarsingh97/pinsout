import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import "./Header.Module.css"
import logo from "../img/Logo.png"
export default function Header() {
    return (
        <Container fluid className='d-none d-lg-block mt-md-2'>
            <Row className="align-items-center">
                <Col md={2}>
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                </Col>
                <Col md={10} className="">
                    <Row >
                        <Col md={12}>
                            <select name="" id="language">
                                <option value="English">English</option>
                                <option value="Hindi">Hindi</option>
                            </select>

                            <select name="" id="" className='mx-2'>
                                <option value="USD">USD</option>
                                <option value="INR">INR</option>
                            </select>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Row>
                                <Col md={9} className="my-md-2">
                                    {/* navigation bar */}
                                    <nav>
                                        <ul>
                                            <li><a href="#">Home</a></li>
                                            <li><a href="#">School Uniforms</a></li>
                                            <li><a href="#">Corporate</a></li>
                                            <li><a href="#">Sports</a></li>
                                            <li><a href="#">Blogs</a></li>
                                        </ul>
                                    </nav>
                                </Col>
                                <Col md={3}>
                                    <div className="social_icons">
                                        <SearchIcon/>
                                        <FavoriteBorderIcon/>
                                        <ShoppingCartIcon/>
                                        <PermIdentityOutlinedIcon/>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
