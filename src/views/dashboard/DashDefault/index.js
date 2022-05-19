import React from 'react';
 import {Row, Col, Card} from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// import AmChartEarnings from "./chart/AmChartEarnings";
// import AmChartStatistics6 from "./chart/AmChartStatistics6";

// import avatar1 from '../../../assets/images/user/avatar-1.jpg';
// import avatar2 from '../../../assets/images/user/avatar-2.jpg';
// import avatar3 from '../../../assets/images/user/avatar-3.jpg';

const DashDefault = () => {
    return (
        <React.Fragment>
            <Row>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Body>
                            <h6 className='mb-4'>ComingSoon</h6>
                            {/* <div className="row d-flex align-items-center">
                                <div className="col-9">
                                    <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5"/> $249.95</h3>
                                </div>

                                <div className="col-3 text-right">
                                    <p className="m-b-0">50%</p>
                                </div>
                            </div>
                            <div className="progress m-t-30" style={{height: '7px'}}>
                                <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"/>
                            </div> */}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default  DashDefault;