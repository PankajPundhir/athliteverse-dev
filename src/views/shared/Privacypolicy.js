import React from 'react';
import { Card, Container,Button } from 'react-bootstrap';
import LogoHeader from '../../../src/assets/images/logo1.svg';
import LogoHeadermb from '../../../src/assets/images/logo-mb.svg';
import { useHistory } from 'react-router-dom';

function Privacypolicy() {
    const history = useHistory();
    const JoinWaitList = () =>{ 
        let path = `/auth/signup`; 
        history.push(path);
      }
    return (
        <>
            <div className='fixed-bg-login'></div>
            <div className='pl-2 pr-2  pl-md-2 pr-md-2  pl-lg-3 pr-lg-3'>
                <header className='pt-3'>
                    <div className="d-flex justify-content-center justify-content-md-end align-items-center p-mb-x">
                        <div  className='mb-1'>
                            <a href="/faq" target="_blank" rel="noreferrer" className='mr-3 d-mb-none faq-link'>FAQ</a>
                        </div>
                        <div> <Button className="mr-0" variant="primary" onClick={JoinWaitList}>Join Athletiverse</Button></div>
                        <div>
                            <a href="https://www.instagram.com/athletiverse/?igshid=YTM0ZjI4ZDI=" className='mr-3 ml-3 mt-2 mt-md-0' target="_blank" rel="noreferrer">
                                <i className="feather icon-instagram x-2 cursorPointer"></i></a>
                            <a href="https://twitter.com/athletiverse?s=21&t=xjbRxKX8zOsIwx2JN70qZw" className="pr-md-1 pr-0" target="_blank" rel="noreferrer"><i className="feather icon-twitter x-2 cursorPointer"></i></a>
                        </div>
                    </div>
                </header>
                <div className='d-flex justify-content-center align-items-center flex-column'>
                    <div className='mt-3 col-md-12 mb-2 mb-md-3 col-lg-7 text-center'>
                        <a href="/"><img src={LogoHeader} className="img-fluid logo-w-login mb-3 mb-md-0 d-none d-md-none d-lg-block mx-auto" alt="logo" /></a>
                        <a href="/"><img src={LogoHeadermb} className="img-fluid logo-w-login mb-3 mb-md-0 d-block d-md-block d-lg-none mx-auto" alt="logo" /></a>
                        <div className='pt-2 pt-md-4'>
                            <h1>Privacy Policy</h1>
                        </div>
                    </div>
                    <Container>
                        <Card className='mb-3'>
                            <Card.Body>
                                <p>
                                    Protecting your private information is our priority. This Statement of Privacy applies to
                                    Athletiverse, Inc. and governs data collection and usage. The Athletiverse application is
                                    a most efficient and cost effective way for athletes and businesses to harness the
                                    economic power of sports through direct name, image, and likeness engagements
                                    between athletes and businesses. By using the Athletiverse application, you consent to
                                    the data practices described in this statement.

                                </p>
                                <h4 className='mt-lg-4'>Collection of your Personal Information</h4>
                                <p>In order to better provide you with products and services offered, Athletiverse may
                                    collect personally identifiable information, such as your:
                                </p>
                                <ul className='pl-3'>
                                    <li>First and Last Name </li>
                                    <li>E-mail Address </li>
                                    <li>Social Media Handle </li>
                                    <li>Venmo Handle</li>
                                    <li>Paypal Address</li>
                                </ul>
                                <p>If you purchase Athletiverse's products and services, we collect billing and credit card
                                    information. This information is used to complete the purchase transaction. </p>
                                <p>Athletiverse may also collect anonymous demographic information, which is not unique
                                    to you, such as your: </p>
                                <ul className='pl-3'>
                                    <li>Age</li>
                                    <li>Gender</li>
                                </ul>
                                <p>We do not collect any personal information about you unless you voluntarily provide it to
                                    us. However, you may be required to provide certain personal information to us when you
                                    elect to use certain products or services. These may include: (a) registering for an
                                    account; (b) entering a sweepstakes or contest sponsored by us or one of our partners;
                                    (c) signing up for special offers from selected third parties; (d) sending us an email
                                    message; (e) submitting your credit card or other payment information when ordering
                                    and purchasing products and services. To wit, we will use your information for, but not
                                    limited to, communicating with you in relation to services and/or products you have
                                    requested from us. We also may gather additional personal or non-personal information
                                    in the future.
                                </p>
                                <h4 className='mt-lg-4'>Use of your Personal Information</h4>
                                <p>Athletiverse collects and uses your personal information to operate and deliver the
                                    services you have requested.</p>
                                <p>Athletiverse may also use your personally identifiable information to inform you of other
                                    products or services available from Athletiverse and its affiliates.</p>

                                <h4 className='mt-lg-4'>Sharing Information with Third Parties</h4>
                                <p>Athletiverse does not sell, rent or lease its customer lists to third parties.</p>
                                <p>Athletiverse may share data with trusted partners to help perform statistical analysis,
                                    send you email or postal mail, provide customer support, or arrange for deliveries. All
                                    such third parties are prohibited from using your personal information except to provide
                                    these services to Athletiverse, and they are required to maintain the confidentiality of
                                    your information.
                                </p>
                                <p>Athletiverse may disclose your personal information, without notice, if required to do so
                                    by law or in the good faith belief that such action is necessary to: (a) conform to the
                                    edicts of the law or comply with legal process served on Athletiverse or the site; (b)
                                    protect and defend the rights or property of Athletiverse; and/or (c) act under exigent
                                    circumstances to protect the personal safety of users of Athletiverse, or the public.
                                </p>
                                <h4 className='mt-lg-4'>Right to Deletion</h4>
                                <p>Subject to certain exceptions set out below, on receipt of a verifiable request from you,
                                    we will:
                                </p>
                                <ul className='pl-3'>
                                    <li> Delete your personal information from our records; and </li>
                                    <li> Direct any service providers to delete your personal information from their
                                        records.
                                    </li>
                                </ul>
                                <p>Please note that we may not be able to comply with requests to delete your personal
                                    information if it is necessary to:
                                </p>
                                <ul className='pl-3'>
                                    <li>Complete the transaction for which the personal information was collected, fulfill
                                        the terms of a written warranty or product recall conducted in accordance with
                                        federal law, provide a good or service requested by you, or reasonably
                                        anticipated within the context of our ongoing business relationship with you, or
                                        otherwise perform a contract between you and us;</li>
                                    <li>Detect security incidents, protect against malicious, deceptive, fraudulent, or
                                        illegal activity; or prosecute those responsible for that activity;</li>
                                    <li>Debug to identify and repair errors that impair existing intended functionality;
                                    </li>
                                    <li>Exercise free speech, ensure the right of another consumer to exercise his or her
                                        right of free speech, or exercise another right provided for by law;
                                    </li>
                                    <li>Comply with the California Electronic Communications Privacy Act;
                                    </li>
                                    <li> Engage in public or peer-reviewed scientific, historical, or statistical research in
                                        the public interest that adheres to all other applicable ethics and privacy laws,
                                        when our deletion of the information is likely to render impossible or seriously
                                        impair the achievement of such research, provided we have obtained your
                                        informed consent;</li>
                                    <li>Enable solely internal uses that are reasonably aligned with your expectations
                                        based on your relationship with us;</li>
                                    <li>Comply with an existing legal obligation; or</li>
                                    <li>Otherwise use your personal information, internally, in a lawful manner that is
                                        compatible with the context in which you provided the information.</li>
                                </ul>
                                <h4 className='mt-lg-4'>Children Under Thirteen</h4>
                                <p>Athletiverse does not knowingly collect personally identifiable information from children
                                    under the age of thirteen. If you are under the age of thirteen, you must ask your parent
                                    or guardian for permission to use this application.</p>
                                <h4 className='mt-lg-4'>E-mail Communications</h4>
                                <p>From time to time, Athletiverse may contact you via email for the purpose of providing
                                    announcements, promotional offers, alerts, confirmations, surveys, and/or other general
                                    communication. In order to improve our Services, we may receive a notification when you
                                    open an email from Athletiverse or click on a link therein.</p>
                                <p>If you would like to stop receiving marketing or promotional communications via email
                                    from Athletiverse, you may opt out of such communications by Selecting "unsubscribe"
                                    on email.
                                </p>
                                <h4 className='mt-lg-4'>Changes to this Statement</h4>
                                <p>Athletiverse reserves the right to change this Privacy Policy from time to time. We will
                                    notify you about significant changes in the way we treat personal information by sending
                                    a notice to the primary email address specified in your account, by placing a prominent
                                    notice on our application, and/or by updating any privacy information. Your continued use
                                    of the application and/or Services available after such modifications will constitute your:
                                    (a) acknowledgment of the modified Privacy Policy; and (b) agreement to abide and be
                                    bound by that Policy.</p>
                                <h4 className='mt-lg-4'>Contact Information</h4>
                                <p>Athletiverse welcomes your questions or comments regarding this Statement of Privacy.
                                    If you believe that Athletiverse has not adhered to this Statement, please contact
                                    Athletiverse at:
                                </p>
                                <p>Athletiverse, Inc.<br />
                                    8635 W. Sahara Ave #528<br />
                                    Las Vegas, Nevada 89117 </p>
                                <p>
                                    <strong>Email Address:</strong><br />
                                    <a href="mailto:info@athletiverse-nil.com">info@athletiverse-nil.com</a>
                                </p>
                                <p>
                                    <strong>Telephone number:</strong><br />
                                    702-335-6731<br />
                                    Effective as of May 04, 2022
                                </p>

                            </Card.Body>
                        </Card>
                    </Container>
                </div>

            </div>
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
export default Privacypolicy;
