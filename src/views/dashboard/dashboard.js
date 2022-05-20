import React  from 'react';
import { DashboardVal } from '../../../src/config/resource'; 

const Dashboard = () => {
    return (
        <React.Fragment>
            <h4>{DashboardVal.LblWelcome}</h4>
        </React.Fragment>
    );
}

export default Dashboard;