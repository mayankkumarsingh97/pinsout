
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./activity.Module.css"
import marshal_girl from "../img/marshal_girl.png"
import swimming_man from '../img/swimmin_guy.png'
import bycycle_man from '../img/man_bycyle.png'
import jogging_girl from '../img/jogging_girl.png'
import hanging_gym from '../img/hanging_gym.png'
// import swimming_man from '../img/swimmin_guy.png'
export default function Activity() {
  return (
    <>
     <Container className="py-5">
        <Row className="justify-content-center">
            <Col md={12} >
                <h2 className='text-center'>Shop by activity</h2>
                <p className='text-center'>There is something for everyone.</p>
            </Col>
            <Col md={2} xs={6}>
                <div className="activity_img">
                    <img src={jogging_girl} alt="" />
                    <div className='overley_title'>AEROBICS & FITNESS</div>
                </div>
            </Col>
            <Col md={2} xs={6}>
                <div className="activity_img">
                    <img src={bycycle_man} alt="" />
                    <div className='overley_title'>cycliing sports</div>
                </div>
            </Col>
            <Col md={2} xs={6}>
                <div className="activity_img">
                    <img src={swimming_man} alt="" />
                    <div className='overley_title'>water sports</div>
                </div>
            </Col>
            <Col md={2} xs={6}>
                <div className="activity_img">
                    <img src={hanging_gym} alt="" />
                    <div className='overley_title'>gymnastics</div>
                </div>
            </Col>
            <Col md={2} xs={6}>
                <div className="activity_img">
                    <img src={marshal_girl} alt="" />
                    <div className='overley_title'>martial arts</div>
                </div>
            </Col>
        </Row>
     </Container>
    </>
  )
}
