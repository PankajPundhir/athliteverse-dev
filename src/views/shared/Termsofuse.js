import React from 'react';
import LogoHeader from '../../../src/assets/images/logo1.svg';
import LogoHeadermb from '../../../src/assets/images/logo-mb.svg';
import { Card, Container,Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
function Termsofuse() {
    const history = useHistory();
    const JoinWaitList = () =>{ 
        let path = `/register`; 
        history.push(path);
      }
    return (
        <>
            <div className='fixed-bg-login'></div>
            <div className='pl-2 pr-2  pl-md-2 pr-md-2  pl-lg-3 pr-lg-3'>
            <header className='pt-3'>
                    <div className="d-flex justify-content-center justify-content-md-end align-items-center p-mb-x">
                        <div className='mb-1'>
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
                            <h1>Terms and Conditions</h1>
                        </div>
                    </div>
                    <Container>
                        <Card className='mb-3'>
                            <Card.Body>
                                <h4 className='mt-lg-4'>Agreement between User and Athletiverse, Inc.</h4>
                                <p>

                                    Welcome to www.athletiverse-nil.com. The <a href="www.athletiverse-nil.com" target="_blank" rel="noreferrer">www.athletiverse-nil.com</a> website (the "Site")
                                    is comprised of various web pages operated by Athletiverse, Inc. ("Athletiverse").
                                    <a href="www.athletiverse-nil.com" target="_blank" rel="noreferrer">www.athletiverse-nil.com</a> is offered to you conditioned on your acceptance without
                                    modification of the terms, conditions, and notices contained herein (the "Terms"). Your
                                    use of <a href="www.athletiverse-nil.com" target="_blank" rel="noreferrer">www.athletiverse-nil.com</a> constitutes your agreement to all such Terms. Please
                                    read these terms carefully and keep a copy of them for your reference.
                                </p>

                                <p><a href="www.athletiverse-nil.com" target="_blank" rel="noreferrer">www.athletiverse-nil.com</a> is a Surveys/Questionnaire Site.
                                </p>
                                <p>Collect prospective student-athletes interested in using the Athletiverse NIL Platform
                                    upon release. Athletiverse-NIL collects the social media and email of users to compile
                                    platform waitlist. Athletiverse may collect user’s social media handles, legal name, and
                                    email information for collection. This information WILL NOT under any circumstance be
                                    shared or sold to parties outside of Athletiverse, Inc and is considered to be propriety
                                    and confidential information.
                                </p>
                                <h4 className='mt-lg-4'>Electronic Communications</h4>
                                <p>Visiting <a href="www.athletiverse-nil.com" target="_blank" rel="noreferrer">www.athletiverse-nil.com</a> or sending emails to Athletiverse constitutes electronic
                                    communications. You consent to receive electronic communications and you agree that
                                    all agreements, notices, disclosures and other communications that we provide to you
                                    electronically, via email and on the Site, satisfy any legal requirement that such
                                    communications be in writing.
                                </p>

                                <h4 className='mt-lg-4'>Children Under Thirteen</h4>
                                <p>Athletiverse does not knowingly collect, either online or offline, personal information
                                    from persons under the age of thirteen. If you are under 18, you may use
                                    <a href="www.athletiverse-nil.com" target="_blank" rel="noreferrer">www.athletiverse-nil.com</a> only with permission of a parent or guardian.</p>

                                <h4 className='mt-lg-4'>Links to Third Party Sites/Third Party Services</h4>
                                <p>www.athletiverse-nil.com may contain links to other websites ("Linked Sites"). The
                                    Linked Sites are not under the control of Athletiverse and Athletiverse is not responsible
                                    for the contents of any Linked Site, including without limitation any link contained in a
                                    Linked Site, or any changes or updates to a Linked Site. Athletiverse is providing these
                                    links to you only as a convenience, and the inclusion of any link does not imply
                                    endorsement by Athletiverse of the site or any association with its operators.</p>
                                <p>Certain services made available via www.athletiverse-nil.com are delivered by third
                                    party sites and organizations. By using any product, service or functionality originating
                                    from the www.athletiverse-nil.com domain, you hereby acknowledge and consent that
                                    Athletiverse may share such information and data with any third party with whom
                                    Athletiverse has a contractual relationship to provide the requested product, service or
                                    functionality on behalf of www.athletiverse-nil.com users and customers.</p>

                                <h4 className='mt-lg-4'>No Unlawful or Prohibited Use/Intellectual Property</h4>
                                <p>You are granted a non-exclusive, non-transferable, revocable license to access and use
                                    www.athletiverse-nil.com strictly in accordance with these terms of use. As a condition
                                    of your use of the Site, you warrant to Athletiverse that you will not use the Site for any
                                    purpose that is unlawful or prohibited by these Terms. You may not use the Site in any
                                    manner which could damage, disable, overburden, or impair the Site or interfere with
                                    any other party's use and enjoyment of the Site. You may not obtain or attempt to obtain
                                    any materials or information through any means not intentionally made available or
                                    provided for through the Site.
                                </p>
                                <p>All content included as part of the Service, such as text, graphics, logos, images, as well
                                    as the compilation thereof, and any software used on the Site, is the property of
                                    Athletiverse or its suppliers and protected by copyright and other laws that protect
                                    intellectual property and proprietary rights. You agree to observe and abide by all
                                    copyright and other proprietary notices, legends or other restrictions contained in any
                                    such content and will not make any changes thereto.
                                </p>

                                <p>You will not modify, publish, transmit, reverse engineer, participate in the transfer or
                                    sale, create derivative works, or in any way exploit any of the content, in whole or in
                                    part, found on the Site. Athletiverse content is not for resale. Your use of the Site does
                                    not entitle you to make any unauthorized use of any protected content, and in particular
                                    you will not delete or alter any proprietary rights or attribution notices in any content.
                                    You will use protected content solely for your personal use, and will make no other use
                                    of the content without the express written permission of Athletiverse and the copyright
                                    owner. You agree that you do not acquire any ownership rights in any protected
                                    content. We do not grant you any licenses, express or implied, to the intellectual
                                    property of Athletiverse or our licensors except as expressly authorized by these Terms.</p>
                                <h4 className='mt-lg-4'>International Users</h4>
                                <p>The Service is controlled, operated and administered by Athletiverse from our offices
                                    within the USA. If you access the Service from a location outside the USA, you are
                                    responsible for compliance with all local laws. You agree that you will not use the
                                    Athletiverse Content accessed through www.athletiverse-nil.com in any country or in
                                    any manner prohibited by any applicable laws, restrictions or regulations</p>
                                <h4 className='mt-lg-4'>Indemnification</h4>
                                <p>You agree to indemnify, defend and hold harmless Athletiverse, its officers, directors,
                                    employees, agents and third parties, for any losses, costs, liabilities and expenses
                                    (including reasonable attorney's fees) relating to or arising out of your use of or inability
                                    to use the Site or services, any user postings made by you, your violation of any terms
                                    of this Agreement or your violation of any rights of a third party, or your violation of any
                                    applicable laws, rules or regulations. Athletiverse reserves the right, at its own cost, to
                                    assume the exclusive defense and control of any matter otherwise subject to
                                    indemnification by you, in which event you will fully cooperate with Athletiverse in
                                    asserting any available defenses.</p>
                                <h4 className='mt-lg-4'>Arbitration</h4>
                                <p>In the event the parties are not able to resolve any dispute between them arising out of
                                    or concerning these Terms and Conditions, or any provisions hereof, whether in
                                    contract, tort, or otherwise at law or in equity for damages or any other relief, then such
                                    dispute shall be resolved only by final and binding arbitration pursuant to the Federal
                                    Arbitration Act, conducted by a single neutral arbitrator and administered by the
                                    American Arbitration Association, or a similar arbitration service selected by the parties,
                                    in a location mutually agreed upon by the parties. The arbitrator's award shall be final,
                                    and judgment may be entered upon it in any court having jurisdiction. In the event that
                                    any legal or equitable action, proceeding or arbitration arises out of or concerns these
                                    Terms and Conditions, the prevailing party shall be entitled to recover its costs and
                                    reasonable attorney's fees. The parties agree to arbitrate all disputes and claims in
                                    regards to these Terms and Conditions or any disputes arising as a result of these
                                    Terms and Conditions, whether directly or indirectly, including Tort claims that are a
                                    result of these Terms and Conditions. The parties agree that the Federal Arbitration Act
                                    governs the interpretation and enforcement of this provision. The entire dispute,
                                    including the scope and enforceability of this arbitration provision shall be determined by
                                    the Arbitrator. This arbitration provision shall survive the termination of these Terms and
                                    Conditions. </p>
                                <h4 className='mt-lg-4'>Liability Disclaimer</h4>
                                <p>THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR
                                    AVAILABLE THROUGH THE SITE MAY INCLUDE INACCURACIES OR
                                    TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE
                                    INFORMATION HEREIN. ATHLETIVERSE AND/OR ITS SUPPLIERS MAY MAKE
                                    IMPROVEMENTS AND/OR CHANGES IN THE SITE AT ANY TIME.
                                </p>
                                <p>ATHLETIVERSE, INC AND/OR ITS SUPPLIERS MAKE NO REPRESENTATIONS
                                    ABOUT THE SUITABILITY, RELIABILITY, AVAILABILITY, TIMELINESS, AND
                                    ACCURACY OF THE INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND
                                    RELATED GRAPHICS CONTAINED ON THE SITE FOR ANY PURPOSE. TO THE
                                    MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ALL SUCH INFORMATION,
                                    SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS ARE PROVIDED
                                    "AS IS" WITHOUT WARRANTY OR CONDITION OF ANY KIND. ATHLETIVERSE
                                    AND/OR ITS SUPPLIERS HEREBY DISCLAIM ALL WARRANTIES AND CONDITIONS
                                    WITH REGARD TO THIS INFORMATION, SOFTWARE, PRODUCTS, SERVICES
                                    AND RELATED GRAPHICS, INCLUDING ALL IMPLIED WARRANTIES OR
                                    CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                                    TITLE AND NON-INFRINGEMENT.
                                </p>
                                <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
                                    SHALL ATHLETIVERSE AND/OR ITS SUPPLIERS BE LIABLE FOR ANY DIRECT,
                                    INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL DAMAGES OR
                                    ANY DAMAGES WHATSOEVER INCLUDING, WITHOUT LIMITATION, DAMAGES
                                    FOR LOSS OF USE, DATA OR PROFITS, ARISING OUT OF OR IN ANY WAY
                                    CONNECTED WITH THE USE OR PERFORMANCE OF THE SITE, WITH THE
                                    DELAY OR INABILITY TO USE THE SITE OR RELATED SERVICES, THE
                                    PROVISION OF OR FAILURE TO PROVIDE SERVICES, OR FOR ANY
                                    INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS
                                    OBTAINED THROUGH THE SITE, OR OTHERWISE ARISING OUT OF THE USE OF
                                    THE SITE, WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT
                                    LIABILITY OR OTHERWISE, EVEN IF ATHLETIVERSE OR ANY OF ITS SUPPLIERS
                                    HAS BEEN ADVISED OF THE POSSIBILITY OF DAMAGES. BECAUSE SOME
                                    STATES/JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF
                                    LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE ABOVE
                                    LIMITATION MAY NOT APPLY TO YOU. IF YOU ARE DISSATISFIED WITH ANY
                                    PORTION OF THE SITE, OR WITH ANY OF THESE TERMS OF USE, YOUR SOLE
                                    AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING THE SITE.</p>
                                <h4 className='mt-lg-4'>Termination/Access Restriction</h4>
                                <p>Athletiverse reserves the right, in its sole discretion, to terminate your access to the Site
                                    and the related services or any portion thereof at any time, without notice. To the
                                    maximum extent permitted by law, this agreement is governed by the laws of the State
                                    of Nevada and you hereby consent to the exclusive jurisdiction and venue of courts in
                                    Nevada in all disputes arising out of or relating to the use of the Site. Use of the Site is
                                    unauthorized in any jurisdiction that does not give effect to all provisions of these
                                    Terms, including, without limitation, this section.
                                </p>
                                <p>You agree that no joint venture, partnership, employment, or agency relationship exists
                                    between you and Athletiverse as a result of this agreement or use of the Site.
                                    Athletiverse's performance of this agreement is subject to existing laws and legal
                                    process, and nothing contained in this agreement is in derogation of Athletiverse's right
                                    to comply with governmental, court and law enforcement requests or requirements
                                    relating to your use of the Site or information provided to or gathered by Athletiverse
                                    with respect to such use. If any part of this agreement is determined to be invalid or
                                    unenforceable pursuant to applicable law including, but not limited to, the warranty
                                    disclaimers and liability limitations set forth above, then the invalid or unenforceable
                                    provision will be deemed superseded by a valid, enforceable provision that most closely
                                    matches the intent of the original provision and the remainder of the agreement shall
                                    continue in effect.</p>
                                <p>Unless otherwise specified herein, this agreement constitutes the entire agreement
                                    between the user and Athletiverse with respect to the Site and it supersedes all prior or
                                    contemporaneous communications and proposals, whether electronic, oral or written,
                                    between the user and Athletiverse with respect to the Site. A printed version of this
                                    agreement and of any notice given in electronic form shall be admissible in judicial or
                                    administrative proceedings based upon or relating to this agreement to the same extent
                                    and subject to the same conditions as other business documents and records originally
                                    generated and maintained in printed form. It is the express wish to the parties that this
                                    agreement and all related documents be written in English.</p>
                                <h4 className='mt-lg-4'>Changes to Terms</h4>
                                <p>Athletiverse reserves the right, in its sole discretion, to change the Terms under which
                                    www.athletiverse-nil.com is offered. The most current version of the Terms will
                                    supersede all previous versions. Athletiverse encourages you to periodically review the
                                    Terms to stay informed of our updates.</p>
                                <h4 className='mt-lg-4'>Contact Us</h4>
                                <p>Athletiverse welcomes your questions or comments regarding the Terms: </p>
                                <p>Athletiverse, Inc.<br />
                                    8635 W. Sahara Ave #528<br />
                                    Las Vegas, Nevada 89117 </p>
                                <p><strong>Email Address:</strong><br />
                                    <a href="mailto:info@athletiverse-nil.com">info@athletiverse-nil.com</a>
                                </p>

                                <p><strong> Telephone number:</strong><br />
                                702-335-6731<br />
                                    Effective as of May 06, 2022<br /></p>




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
export default Termsofuse;
