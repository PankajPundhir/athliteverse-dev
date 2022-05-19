import React from 'react';
import LogoHeader from '../../../assets/images/logo1.svg';
import LogoHeadermb from '../../../assets/images/logo-mb.svg';
import ALogo from '../../../assets/images/success-img.svg';
import { Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


function Thankyou() {
    const history = useHistory();
    function GotoHome() {
        history.push('/auth/signup');
    }


    return (
        <>
            <div className='fixed-bg-login'></div>
            <div className='pl-2 pr-2  pl-md-2 pr-md-2  pl-lg-3 pr-lg-3 wrap-login'>
            <header className='pt-3'>
                    <div className="d-flex justify-content-center justify-content-md-end align-items-center">
                        <div className='mb-faq-m'> <Button className='mr-0' variant="primary" onClick={GotoHome} >Join Athletiverse</Button>
                        </div>
                        <div>
                            <a href="https://www.instagram.com/athletiverse/?igshid=YTM0ZjI4ZDI=" className='mr-3 ml-3 mt-2 mt-md-0' target="_blank" rel="noreferrer">
                                <i className="feather icon-instagram x-2 cursorPointer"></i></a>
                            <a href="https://twitter.com/athletiverse?s=21&t=xjbRxKX8zOsIwx2JN70qZw" className="pr-md-1 pr-0" target="_blank" rel="noreferrer"><i className="feather icon-twitter x-2 cursorPointer"></i></a>
                        </div>
                    </div>
                </header>
                <Container>
                    <div className='d-flex justify-content-center align-items-center white flex-column min-h-success'>
                        <div className='mt-3 col-md-12 mb-0 mb-md-0 col-lg-9 text-center'>
                            <img src={LogoHeader} className="img-fluid logo-w-login mb-1 mb-md-0 d-none d-md-none d-lg-block mx-auto" alt="logo" />
                            <img src={LogoHeadermb} className="img-fluid logo-w-login mb-1 mb-md-0 d-block d-md-block d-lg-none mx-auto" alt="logo" />
                        </div>
                        <div className="row wrap-thank-p w-100 my-3 my-md-3 my-lg-4">
                            <div className='col-12 col-md-12 col-lg-6 border-rgt wrap-thank-L pt-3 pt-md-4'>
                                <div className="text-center"><img src={ALogo} className="img-fluid col-md-11 col-lg-9 mb-2 pl-0 pr-0 costum-success-i"  alt="logo" /></div>
                                <div><h1 className="heading">Congratulations! you have successfully signed up</h1></div>
                                
                            </div>
                            <div className='col-12 col-md-12 col-lg-6 wrap-thank-L'>
                                <h3 className='mb-3'>Thank you for joining the Athletiverse waitlist! </h3>
                                <p>Athletiverse is the only open-market NIL platform dedicated
                                    to student-athletes. We bring prosperity to both business and student-athlete communities.</p>
                                <p className='txt-black mb-0'>Athletiverse takes pride in:</p>
                                <ul className="pl-3">
                                    <li>Being the easiest way for athletes to make money.</li>
                                    <li>Fast automated payouts</li>
                                    <li>Allowing you to maintain full NIL rights without requiring exclusivity contracts</li>
                                    <li>Amplifying the name, image, and likeness value of over 700K student-athletes.</li>
                                    <li>Allowing the more than 30 million US businesses to offer you NIL engagements.</li>
                                    <li>Being a utility for agents and sports talent agencies.</li>
                                    <li>Empowering your community outreach.</li>
                                    <li>Maximizing NCAA NIL compliance standards</li>
                                </ul>

                                <p className='mt-4'>Athletiverse supports your long-term financial security, long after your playing days are over. It doesn’t
                                    matter who you are, we look forward to providing you the opportunity to earn your worth.</p>
                                <p className='mt-4'>Follow our social media accounts for the latest news from Athletiverse. Please email or reach out to us on
                                    social media with any questions.</p>
                                <h3>We’ll see you in the Athletiverse shortly.</h3>
                            </div>
                        </div>
                    </div>
                </Container>
               
            </div>
            <footer className='footer-wrap col-md-12'>
                <div className='d-flex flex-wrap justify-content-center justify-content-md-center justify-content-lg-between align-items-center'>
                    <div>
                        <p className='cpyright mr-0 mr-md-3 mr-lg-0'>&copy; Copyright 2022 Athletiverse, Inc. All Rights Reserved. <a href="/privacypolicy" target="_blank" rel="noreferrer">Privacy Policy</a> | <a href="/termsofuse" target="_blank">Terms and Conditions</a></p>
                    </div>
                    <div>
                        <p className='cpyright1'>Follow Us: <a href="https://www.instagram.com/athletiverse/?igshid=YTM0ZjI4ZDI=" className='mr-3 ml-3' target="_blank" rel="noreferrer">
                            <i className="feather icon-instagram x-2 cursorPointer"></i></a>
                            <a href="https://twitter.com/athletiverse?s=21&t=xjbRxKX8zOsIwx2JN70qZw" target="_blank" rel="noreferrer"><i className="feather icon-twitter x-2 cursorPointer"></i></a></p>
                    </div>
                </div>
            </footer>
        </>
    );


}
export default Thankyou;
