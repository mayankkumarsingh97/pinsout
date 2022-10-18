import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./diffrent.Module.css"

import one from '../img/Vector_one.png'
import { borderRadius, width } from '@mui/system';

export default function Diffrent() {
  return (
    <>
     <Container fluid className='what_makes_bg py-5 mt-5'>
     <Container>
        <Row className="justify-content-center">
            <Col md={6}>
             <div className="what_makes_us_diff">
                <h2>What makes us Different.</h2>
                <p>Helping pepople manage Anxiety, pain and sleeplessness.</p>
             </div>
            </Col>
        </Row>
        <Row  className="justify-content-around">
            <Col md={3}>
                <div className="common_card">
                <span style={{background:"#fff",padding:"2px 8px",borderRadius:"50%"}}>
                    <img src={one} className="img-fluid " alt="" /></span>
                    <h6>Locally  Sourced</h6>
                    <div className="desc text-center">
                    I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.
                    </div>
                </div>
            </Col>
            <Col md={3}>
                <div className="common_card">
                <span style={{background:"#fff",padding:"2px 8px",borderRadius:"50%"}}>
                    <img src={one} className="img-fluid" alt="" /></span>
                    <h6>Best Of The Class Material</h6>
                    <div className="desc text-center">
                    I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.
                    </div>
                </div>
            </Col>
            <Col md={3}>
                <div className="common_card">
                    <span style={{background:"#fff",padding:"2px 8px",borderRadius:"50%"}}>
                    <img src={one} className="img-fluid" alt="" /></span>
                    <h6>100% Sustainable Fabric</h6>
                    <div className="desc text-center">
                    I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
     </Container>
    </>
  )
}
