import React, { useContext, useState } from 'react';
import CognitoContext from '../../../../contexts/CognitoContext';
import { ListGroup, Dropdown, Media } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import ChatList from "./ChatList";
import {ConfigContext} from "../../../../contexts/ConfigContext";
import useAuth from '../../../../hooks/useAuth';
import * as resource from '../../../../../src/config/resource';
import avatar1 from '../../../../assets/images/user/avatar-2.jpg';


const NavRight = () => {
    const configContext = useContext(ConfigContext);
    const {UserInfo, setUserInfo} = useContext(CognitoContext);
    const { logout } = useAuth();
    const { rtlLayout } = configContext.state;

    const [listOpen, setListOpen] = useState(false);

    const handleLogout = async () => {
        try {
            //handleClose();
            await logout();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <React.Fragment>
            <ListGroup as='ul' bsPrefix=' ' className="navbar-nav ml-auto" id='navbar-right'>
                <ListGroup.Item as='li' bsPrefix=' '>
                    <Dropdown alignRight={!rtlLayout} className="drp-user">
                        <Dropdown.Toggle as={Link} variant='link' to='#' id="dropdown-basic">
                            <i className="icon feather icon-settings"/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu alignRight className="profile-notification">
                            <div className="pro-head">
                                <img src={avatar1} className="img-radius" alt="User Profile"/>
                                <span>{UserInfo}</span>
                                {/* <Link to='#' className="dud-logout" title="Logout">
                                    <i className="feather icon-log-out"/>
                                </Link> */}
                            </div>
                            <ListGroup as='ul' bsPrefix=' ' variant='flush' className="pro-body">
                                {/* <ListGroup.Item as='li' bsPrefix=' '><Link to='#' className="dropdown-item"><i className="feather icon-settings"/> Settings</Link></ListGroup.Item>
                                <ListGroup.Item as='li' bsPrefix=' '><Link to='#' className="dropdown-item"><i className="feather icon-user"/> Profile</Link></ListGroup.Item>
                                <ListGroup.Item as='li' bsPrefix=' '><Link to='#' className="dropdown-item"><i className="feather icon-mail"/> My Messages</Link></ListGroup.Item>
                                <ListGroup.Item as='li' bsPrefix=' '><Link to='#' className="dropdown-item"><i className="feather icon-lock"/> Lock Screen</Link></ListGroup.Item> */}
                                <ListGroup.Item as='li' bsPrefix=' '><Link to='#' className="dropdown-item" onClick={handleLogout}><i className="feather icon-log-out"/> {resource.LogIn.LblSignOut}</Link></ListGroup.Item>
                            </ListGroup>
                        </Dropdown.Menu>
                    </Dropdown>
                </ListGroup.Item>
            </ListGroup>
            <ChatList listOpen={listOpen} closed={() => setListOpen(false)} />
        </React.Fragment>
    );
};

export default NavRight;
