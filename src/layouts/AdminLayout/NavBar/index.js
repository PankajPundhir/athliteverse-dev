import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import NavLogoImage from '../NavBar/NavLogoImg.png';
import NavLeft from "./NavLeft";
import NavRight from "./NavRight";

import { ConfigContext } from "../../../contexts/ConfigContext";
import * as actionType from "../../../store/actions";

const NavBar = () => {
    //const [moreToggle, setMoreToggle] = useState(false);
    const configContext = useContext(ConfigContext);
    const { collapseMenu, headerBackColor, headerFixedLayout, layout, subLayout } = configContext.state;
    const { dispatch } = configContext;

    let headerClass = ['navbar', 'pcoded-header', 'navbar-expand-lg', headerBackColor];
    if (headerFixedLayout && layout === 'vertical') {
        headerClass = [...headerClass, 'headerpos-fixed'];
    }

    let toggleClass = ['mobile-menu'];
    if (collapseMenu) {
        toggleClass = [...toggleClass, 'on'];
    }

    const navToggleHandler = () => {
        dispatch({ type: actionType.COLLAPSE_MENU })
    };

    // let moreClass = ['mob-toggler'];;
    // if (layout === 'horizontal') {
    //     moreClass = [...moreClass, 'd-none'];
    // }
    let collapseClass = ['collapse navbar-collapse'];
    // if (moreToggle) {
    //     //moreClass = [...moreClass, 'on'];
    //     collapseClass = [...collapseClass, 'd-block']
    // }

    let navBar = (
        <React.Fragment>
            <div className="m-header">
                <Link to='#' className={toggleClass.join(' ')} id="mobile-collapse" onClick={navToggleHandler}><span /></Link>
                <Link to='#' className="b-brand">

                    <div className='navLogoImg'>
                        <img src={NavLogoImage}  />
                    </div>

                </Link>

            </div>
            <div className={collapseClass.join(' ')}>
                <NavLeft />
                <NavRight />
            </div>
        </React.Fragment>
    );

    if (layout === 'horizontal' && subLayout === 'horizontal-2') {
        navBar = (
            <div className="container">
                {navBar}
            </div>
        );
    }

    return (
        <React.Fragment>
            <header className={headerClass.join(' ')}>
                {navBar}
            </header>
        </React.Fragment>
    );
};

export default NavBar;
