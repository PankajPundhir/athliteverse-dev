import React, { useState } from "react";
import { Card, Modal, Button } from "react-bootstrap";
import Breadcrumb from '../../../layouts/AdminLayout/Breadcrumb';
import CognitoLogin from './CognitoLogin';
import lock from '../../../assets/images/gpn_logo_black_01.png';
import { Link } from 'react-router-dom';
import * as resource from '../../../config/resource'

const Signin = () => {
    const [ContactSupportEmail, setContactSupportEmail] = useState(resource.LogIn.Contact_Support_Email)
    const [isVertically, setIsVertically] = useState(false);

    function showContactsDetails() {
        setIsVertically(true);
    }

    return (
        <React.Fragment>
            <Breadcrumb />
            <div className="auth-wrapper">
                <div className="auth-content">
                    <Card className="borderless text-center">
                        <Card.Body className="pb-2">
                            <div className="col-md-4 col-lg-6 mb-4 mx-auto d-md-flex d-lg-flex align-items-center justify-content-center">
                                <img src={lock} alt="lock images" className="img-fluid" />
                            </div>
                            <div className="mb-4 mx-auto d-md-flex d-lg-flex align-items-center justify-content-center">
                                <p>{resource.LogIn.Application_Title}</p>
                            </div>
                            <CognitoLogin />
                            <div className='d-block'>
                                <div className='contact-support' onClick={() => setIsVertically(true)}><i className='feather icon-message-circle'></i> {resource.LogIn.LblContactSupport}</div>
                            </div>
                            <Modal centered show={isVertically} onHide={() => setIsVertically(false)}>
                                <Modal.Header closeButton>
                                    <Modal.Title as="h5"><i className="feather icon-mail mr-2 text-align-center" />{resource.LogIn.LblContactSupport}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p>{resource.LogIn.LblContactSupportModalBeforeLink} <Link to='#' target='_blank' onClick={(e) => { window.location = `mailto:${ContactSupportEmail}`; e.preventDefault(); }}>{resource.LogIn.Contact_Support_Email}</Link>{resource.LogIn.LblContactSupportModalAfterLink}</p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => setIsVertically(false)}>Close</Button>
                                </Modal.Footer>
                            </Modal>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <footer className="loginfooter text-center">
                <div className="pt-2 pb-2">
                    <div>&copy; {resource.LogIn.LogIn_Footer_Text} | <Link to={{pathname:"https://www.bspot.com/pages/terms_of_use"}} target='_blank'>{resource.Footer.footerTermOfUse}</Link> | <Link to={{pathname:"https://www.bspot.com/pages/privacy_policy"}} target="_blank">{resource.Footer.footerPolicy}</Link></div>
                </div>
            </footer>
        </React.Fragment>
    );
}

export default Signin;