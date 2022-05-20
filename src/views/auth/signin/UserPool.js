import React from "react";
import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData={
    // UserPoolId:"us-west-1_UJ5hvltVv",
    // ClientId:"3sfm61gii97a7gnilrenuai7os"


// Droisys
    UserPoolId:process.env.REACT_APP_UserPoolId,
    ClientId:process.env.REACT_APP_CognitoClientId
}

export default new CognitoUserPool(poolData);






