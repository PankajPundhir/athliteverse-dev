import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import NavLogoImage from '../NavLogo/NavLogoImg.png';
import { ConfigContext } from "../../../../contexts/ConfigContext";
import * as actionType from "../../../../store/actions";

const NavLogo = () => {
    const configContext = useContext(ConfigContext);
    const { collapseMenu } = configContext.state;
    const { dispatch } = configContext;


    let toggleClass = ['mobile-menu'];
    if (collapseMenu) {
        toggleClass = [...toggleClass, 'on'];
    }

    return (
        <React.Fragment>
            <div className="navbar-brand header-logo">
                <Link to='#' className="b-brand">
                    <div className='navLogoImg'>
                        <img src={NavLogoImage} />
                    </div>
                    {/* <span className="b-title">GPN</span> */}
                </Link>
                <Link to='#' className={toggleClass.join(' ')} id="mobile-collapse" onClick={() => dispatch({ type: actionType.COLLAPSE_MENU })}><span /></Link>
            </div>
        </React.Fragment>
    );
};

export default NavLogo;
