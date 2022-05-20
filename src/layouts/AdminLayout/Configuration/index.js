import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import TabConfig from "./TabConfig";
import PreBuiltLayout from "./PreBuiltLayout";
import Layout from "./Layout";

import { ConfigContext } from "../../../contexts/ConfigContext";
import * as actionType from "../../../store/actions";

const Configuration = () => {
    const configContext = useContext(ConfigContext);
    const { navIconColor } = configContext.state;
    const { dispatch } = configContext;

    const [configOpen, setConfigOpen] = useState(false);
    let configClass = ['menu-styler'];
    if (configOpen) {
        configClass = [...configClass, 'open'];
    }

    return (
        <React.Fragment>
            
        </React.Fragment>
    );
};

export default Configuration;
