import { useContext } from 'react';

import CognitoContext from '../contexts/CognitoContext';

const useAuth = () => useContext(CognitoContext);

export default useAuth;
