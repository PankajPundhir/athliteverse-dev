import React from 'react';
import LogoHeader from '../../../assets/images/logo1.svg';
import LogoHeadermb from '../../../assets/images/logo-mb.svg';
import BLogo from '../../../assets/images/success-img.svg';
import { Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


function ThankyouBusiness() {
    const history = useHistory();
    function GotoHome() {
        history.push('/register');
    }


    return (
        <>
            <div className='fixed-bg-login'></div>
            <div className='pl-2 pr-2  pl-md-2 pr-md-2  pl-lg-3 pr-lg-3 wrap-login'>
              <header className='pt-3'>
                    <div className="d-flex justify-content-center justify-content-md-end align-items-center">
                        <div className='mb-faq-m'> <Button className='mr-0' variant="primary" onClick={GotoHome}>Join Athletiverse</Button>
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
                                <div className='d-flex justify-content-center'><img src={BLogo} className="img-fluid col-md-11 col-lg-9 mb-2 pl-0 pr-0 costum-success-i" alt="logo" /></div>
                                <div><h1 className="heading">Congratulations! you have successfully signed up</h1></div>
                               
                            </div>
                            <div className='col-12 col-md-12 col-lg-6 wrap-thank-L'>
                                <h3 className='mb-3'>Thank you for joining the Athletiverse waitlist! </h3>
                                <p>Athletiverse is the most efficient and cost-effective way for
                                    businesses to harness the economic power of sports marketing using the social influence of student-athletes. Businesses large and small can now prosper from the influence of student-athletes.</p>
                                <p className='txt-black mb-0'>Athletiverse takes pride in:</p>
                                <ul className="pl-3">
                                    <li>Helping you growing your brand image locally and globally.</li>
                                    <li>Driving your sales higher</li>
                                    <li>Delivering your business incomparable ROI</li>
                                    <li>Matching your business to student-athletes best suit for your advertising and promotional goals</li>
                                    <li>Supporting student-athlete communities</li>
                                    <li>Facilitating templated transactions in 3 steps</li>
                                    <li>Providing you a selection from over 700K student-athletes to best suit your marketing goals</li>
                                    <li>Providing engagement analytics</li>
                                </ul>

                                <p className='mt-4'>With Athletiverse your business will enjoy unparalleled market access and community connection for less
                                    than the cost of lunch.</p>
                                <p className='mt-4'>Follow us on social media for the latest news and updates from Athletiverse. Please email or reach out to us
                                    on social media with any questions or inquiries.</p>
                                <h3>We’ll see you in the Athletiverse shortly.</h3>
                            </div>
                        </div>
                    </div>
                </Container>

               
            </div>
            {/* <footer className='footer-wrap col-md-12'>
                <div className='d-flex flex-wrap justify-content-center justify-content-md-center justify-content-lg-between align-items-center'>
                    <div>
                        <p className='cpyright mr-0 mr-md-3 mr-lg-0'>&copy; Copyright 2022 Athletiverse, Inc. All Rights Reserved. <a href="/privacypolicy" target="_blank" rel="noreferrer">Privacy Policy</a> | <a href="/termsofuse" target="_blank" rel="noreferrer">Terms and Conditions</a></p>
                    </div>
                    <div>
                        <p className='cpyright1'>Follow Us: <a href="https://www.instagram.com/athletiverse/?igshid=YTM0ZjI4ZDI=" className='mr-3 ml-3' target="_blank" rel="noreferrer">
                            <i className="feather icon-instagram x-2 cursorPointer"></i></a>
                            <a href="https://twitter.com/athletiverse?s=21&t=xjbRxKX8zOsIwx2JN70qZw" target="_blank" rel="noreferrer"><i className="feather icon-twitter x-2 cursorPointer"></i></a></p>
                    </div>
                </div>
            </footer> */}
            <footer className='col-md-12 mt-4'>
                <div className='d-flex flex-wrap justify-content-center justify-content-md-center justify-content-lg-between align-items-center pl-lg-2 pr-lg-2 pb-2 pb-md-3 pb-lg-0'>
                    <div>
                        <p className='pt-3 pb-3  text-center mb-0 mr-0 mr-md-4 mr-lg-0'>&copy; Copyright 2022 Athletiverse, Inc. All Rights Reserved. <a href="/privacypolicy" target="_blank" rel="noreferrer">Privacy Policy</a> | <a href="/termsofuse" target="_blank">Terms and Conditions</a></p>
                    </div>
                    <div>
                        <p className='pt-0 pt-md-0 pt-lg-0 pb-0 mb-0'>Follow Us: <a href="https://www.instagram.com/athletiverse/?igshid=YTM0ZjI4ZDI=" className='mr-3 ml-3' target="_blank" rel="noreferrer">
                            <i className="feather icon-instagram x-2 cursorPointer"></i></a>
                            <a href="https://twitter.com/athletiverse?s=21&t=xjbRxKX8zOsIwx2JN70qZw" target="_blank" rel="noreferrer"><i className="feather icon-twitter x-2 cursorPointer"></i></a></p>
                    </div>
                </div>
            </footer>
        </>
    );


}
export default ThankyouBusiness;
