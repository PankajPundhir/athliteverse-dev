import React, { useState } from 'react';
import LogoHeader from '../../../src/assets/images/logo1.svg';
import LogoHeadermb from '../../../src/assets/images/logo-mb.svg';
import { Card, Button, Collapse } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';


function Faq() {

    const [accordionKey, setAccordionKey] = useState(1);
    const history = useHistory();

    const JoinWaitList = () => {
        let path = `/register`;
        history.push(path);
    }

    return (
        <>
            <div className='fixed-bg-login'></div>
            <div className='pl-2 pr-2  pl-md-2 pr-md-2  pl-lg-3 pr-lg-3'>
                <header className='pt-3'>
                    <div className="d-flex justify-content-center justify-content-md-end align-items-center">
                        <div className='mb-faq-m'> <Button className="mr-0" variant="primary" onClick={JoinWaitList}>Join Athletiverse</Button>
                        </div>
                        <div>
                            <a href="https://www.instagram.com/athletiverse/?igshid=YTM0ZjI4ZDI=" className='mr-3 ml-3 mt-2 mt-md-0' target="_blank" rel="noreferrer">
                                <i className="feather icon-instagram x-2 cursorPointer"></i></a>
                            <a href="https://twitter.com/athletiverse?s=21&t=xjbRxKX8zOsIwx2JN70qZw" className="pr-1" target="_blank" rel="noreferrer"><i className="feather icon-twitter x-2 cursorPointer"></i></a>
                        </div>
                    </div>
                </header>
                <div className='d-flex justify-content-center align-items-center flex-column'>
                    <div className='mt-3 col-md-12 mb-2 mb-md-3 col-lg-7 text-center'>
                        <a href="/"><img src={LogoHeader} className="img-fluid logo-w-login mb-3 mb-md-0 d-none d-md-none d-lg-block mx-auto" alt="logo" /></a>
                        <a href="/"><img src={LogoHeadermb} className="img-fluid logo-w-login mb-3 mb-md-0 d-block d-md-block d-lg-none mx-auto" alt="logo" /></a>
                        <div className='pt-2 pt-md-4'>
                            <h1>Frequently Asked Questions</h1>
                        </div>
                    </div>
                </div>
                <div className='container mb-3'>
                    <Card className="mt-0 mb-2 accordianCard">
                        <Card.Header>
                            <Card.Title as="h5" className='w-100'>
                                <Link to='#'
                                    onClick={() => setAccordionKey((accordionKey !== 1) ? 1 : 0)}
                                    aria-controls="accordion1"
                                    aria-expanded={accordionKey === 1}>
                                    How does Athletiverse work for student-athletes?
                                </Link>
                            </Card.Title>
                        </Card.Header>
                        <Collapse in={accordionKey === 1}>
                            <div id="accordion1">
                                <Card.Body>
                                    <Card.Text>
                                        Athletiverse is committed to helping student-athletes maximize the monetary worth of their NIL.  Athletiverse allows you to earn unlimited income by posting business advertisements and promotional offerings to your social media feed.  Through our proprietary platform businesses and brands offer you “engagements” that allow you to either post content provided by the business/brand or create your own endorsement (freestyle) of the business/brand.  The more followers you have, the higher your social media engagement and Athletiverse rating, the higher your earning potential.  However, Athletiverse is for all students-athletes.  Whether you are world renown or a local figure, Athletiverse is the place to earn your worth.
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </Collapse>
                    </Card>
                    <Card className="mt-2 mb-2 accordianCard">
                        <Card.Header>
                            <Card.Title as="h5" className='w-100'>
                                <Link to='#'
                                    onClick={() => setAccordionKey((accordionKey !== 2) ? 2 : 0)}
                                    aria-controls="accordion2"
                                    aria-expanded={accordionKey === 2}>
                                    How does Athletiverse work for a business?
                                </Link>
                            </Card.Title>
                        </Card.Header>
                        <Collapse in={accordionKey === 2}>
                            <div id="accordion2">
                                <Card.Body>
                                    <Card.Text>
                                        Athletiverse offers your business or brand unmatched advertising exposure and growth potential by utilizing the social influence of student-athletes. Our search algorithm will help you find the athlete that best suits your budgetary and audience reach requirements.  Select a student-athlete, engage them and drive sales. Your personalized dashboard will provide you updated KPIs on how your post is being received.   Sponsorships are also available for long term or booster support. Whether you are a local business looking to drive sales, a national brand wanting to grow brand awareness or a booster looking to support your favorite program's student-athletes, Athletiverse offers unmatched reach and ROI.
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </Collapse>
                    </Card>
                    <Card className="mt-2 mb-2 accordianCard">
                        <Card.Header>
                            <Card.Title as="h5" className='w-100'>
                                <Link to='#'
                                    onClick={() => setAccordionKey((accordionKey !== 3) ? 3 : 0)}
                                    aria-controls="accordion3"
                                    aria-expanded={accordionKey === 3}>
                                    How do student-athletes earn money through Athletiverse?
                                </Link>
                            </Card.Title>
                        </Card.Header>
                        <Collapse in={accordionKey === 3}>
                            <div id="accordion3">
                                <Card.Body>
                                    <Card.Text>
                                        Create an account, accept business engagements, complete jobs.
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </Collapse>
                    </Card>
                    <Card className="mt-2 mb-2 accordianCard">
                        <Card.Header>
                            <Card.Title as="h5" className='w-100'>
                                <Link to='#'
                                    onClick={() => setAccordionKey((accordionKey !== 8) ? 8 : 0)}
                                    aria-controls="accordion4"
                                    aria-expanded={accordionKey === 8}>
                                    As a student-athlete when do I get paid?
                                </Link>
                            </Card.Title>
                        </Card.Header>
                        <Collapse in={accordionKey === 8}>
                            <div id="accordion4">
                                <Card.Body>
                                    <Card.Text>
                                        After accepting an engagement you will have a predefined amount of time to post the required content to your social media account along with the engagement code. When Athletiverse identifies that code in your feed payment will be issued via the payment platform of your choice.
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </Collapse>
                    </Card>
                    <Card className="mt-2 mb-2 accordianCard">
                        <Card.Header>
                            <Card.Title as="h5" className='w-100'>
                                <Link to='#'
                                    onClick={() => setAccordionKey((accordionKey !== 4) ? 4 : 0)}
                                    aria-controls="accordion4"
                                    aria-expanded={accordionKey === 4}>
                                    Is Athletiverse free to use?
                                </Link>
                            </Card.Title>
                        </Card.Header>
                        <Collapse in={accordionKey === 4}>
                            <div id="accordion4">
                                <Card.Body>
                                    <Card.Text>
                                        Athletiverse is always free to student-athletes.  There is no charge to businesses until a student-athlete accepts an engagement offer.
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </Collapse>
                    </Card>
                    <Card className="mt-2 mb-2 accordianCard">
                        <Card.Header>
                            <Card.Title as="h5" className='w-100'>
                                <Link to='#'
                                    onClick={() => setAccordionKey((accordionKey !== 5) ? 5 : 0)}
                                    aria-controls="accordion5"
                                    aria-expanded={accordionKey === 5}>
                                    Is there a limit to how many engagements a student-athlete or business can enter into?
                                </Link>
                            </Card.Title>
                        </Card.Header>
                        <Collapse in={accordionKey === 5}>
                            <div id="accordion5">
                                <Card.Body>
                                    <Card.Text>
                                        There is no limit to human potential nor should there be limits on engagements.
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </Collapse>
                    </Card>
                    <Card className="mt-2 mb-2 accordianCard">
                        <Card.Header>
                            <Card.Title as="h5" className='w-100'>
                                <Link to='#'
                                    onClick={() => setAccordionKey((accordionKey !== 6) ? 6 : 0)}
                                    aria-controls="accordion6"
                                    aria-expanded={accordionKey === 6}>
                                    Can a business enter into a long-term engagement with a student-athlete?
                                </Link>
                            </Card.Title>
                        </Card.Header>
                        <Collapse in={accordionKey === 6}>
                            <div id="accordion6">
                                <Card.Body>
                                    <Card.Text>
                                        We call long term engagements Sponsorships.  As a business or booster you will have the ability to choose either engagement or sponsorship.  You choose the duration of the sponsorship and the posting requirements thereof.
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </Collapse>
                    </Card>

                    <Card className="mt-2 mb-2 accordianCard">
                        <Card.Header>
                            <Card.Title as="h5" className='w-100'>
                                <Link to='#'
                                    onClick={() => setAccordionKey((accordionKey !== 9) ? 9 : 0)}
                                    aria-controls="accordion9"
                                    aria-expanded={accordionKey === 9}>
                                    Are there any exclusivity requirements for student-athletes?
                                </Link>
                            </Card.Title>
                        </Card.Header>
                        <Collapse in={accordionKey === 9}>
                            <div id="accordion9">
                                <Card.Body>
                                    <Card.Text>
                                        Absolutely not!  We believe in free agency.
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </Collapse>
                    </Card>
                    <Card className="mt-2 mb-2 accordianCard">
                        <Card.Header>
                            <Card.Title as="h5" className='w-100'>
                                <Link to='#'
                                    onClick={() => setAccordionKey((accordionKey !== 7) ? 7 : 0)}
                                    aria-controls="accordion7"
                                    aria-expanded={accordionKey === 7}>
                                    Are there any contracts needed to use Athletiverse?
                                </Link>
                            </Card.Title>
                        </Card.Header>
                        <Collapse in={accordionKey === 7}>
                            <div id="accordion7">
                                <Card.Body>
                                    <Card.Text>
                                        No. We are here to free the potential of student-athletes and businesses.
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </Collapse>
                    </Card>
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
export default Faq;