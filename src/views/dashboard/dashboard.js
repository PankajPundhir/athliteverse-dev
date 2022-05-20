import React, { useContext } from 'react';
import CognitoContext from '../../contexts/CognitoContext';
import * as resource from '../../../src/config/resource';

const Dashboard = () => {
const {UserInfo, setUserInfo} = useContext(CognitoContext)
    return (
        <React.Fragment>
            <h4>{resource.Dashboard.LblWelcome} <strong className="text-c-blue">{UserInfo}</strong></h4>
            <p>{resource.Dashboard.LblDashboardText1}</p>

            <p>{resource.Dashboard.LblDashboardText2}</p>
        </React.Fragment>
    );
}

export default Dashboard;