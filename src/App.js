import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { CognitoProvider } from "./contexts/CognitoContext";

import routes, { renderRoutes } from "./routes";
import { BASENAME } from "./config/constant";

const App = () => {
  return (
    <React.Fragment>
        <Router basename={BASENAME}>
            <CognitoProvider>
              {renderRoutes(routes)}
            </CognitoProvider>
        </Router>
    </React.Fragment>
  );
};

export default App;
