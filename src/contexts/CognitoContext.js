import React, { useState, createContext, useEffect, useReducer } from 'react';
import { COGNITO_STATE_CHANGED } from "../store/actions";
import Loader from "../components/Loader/Loader";
import UserPool from '../views/auth/signin/UserPool';

const initialState = {
  isLoggedIn: false,
  isInitialised: false,
  user: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case COGNITO_STATE_CHANGED: {
      const { isLoggedIn, user } = action.payload;

      return {
        ...state,
        isLoggedIn,
        isInitialised: true,
        user
      };
    }
    default: {
      return { ...state };
    }
  }
};
// const swalAlert = ((type, text) => {
//   Swal.fire({
//     title: '',
//     type: type,
//     text: text,
//     position: "center",
//     timer: 3000,
//     icon: type,
//     showConfirmButton: false
//   });
// })

const CognitoContext = createContext({
  ...initialState,
  cognitoLogin: () => Promise.resolve(),
  logout: () => Promise.resolve(),
});

export const CognitoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [UserInfo, setUserInfo] = useState()

  const cognitoLogin = async (userInfo, userName, iD) => {
    setUserInfo(userInfo);
        dispatch({
          type: COGNITO_STATE_CHANGED,
          payload: {
            isLoggedIn: true,
            user:{
              id: iD,
              email: userName
            }
           
          }
        });
  }

  const logout = () => {
    const user = UserPool.getCurrentUser();
    if (user) {
      dispatch({
        type: COGNITO_STATE_CHANGED,
        payload: {
          isLoggedIn: false,
          user: null
        }
      });
      setUserInfo('');
      return user.signOut();
    }

  };

  useEffect(() => {
    const user = UserPool.getCurrentUser();
    if (user) {
      setUserInfo(user.username);
      
      dispatch({
        type: COGNITO_STATE_CHANGED,
        payload: {
          isLoggedIn: true,
          user: {
            id: user.uid,
            email: user.Username,
          }
        }
      });
    } else {
      setUserInfo('');
      dispatch({
        type: COGNITO_STATE_CHANGED,
        payload: {
          isLoggedIn: false,
          user: null
        }
      });
    }
  }, [dispatch]);

  if (!state.isInitialised) {
    return <Loader />;
  }

  return (
    <CognitoContext.Provider value={{ ...state, cognitoLogin, logout, UserInfo }}>
      {children}
    </CognitoContext.Provider>
  );
};

export default CognitoContext;
