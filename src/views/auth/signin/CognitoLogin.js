import React, { useState, useReducer } from 'react';
import { Row, Col, Button, Alert } from 'react-bootstrap';
import { FIREBASE_STATE_CHANGED } from '../../../store/actions';
import * as Yup from 'yup';
import { Formik } from 'formik';
import useAuth from '../../../hooks/useAuth';
import useScriptRef from '../../../hooks/useScriptRef';
import Swal from 'sweetalert2';
import * as resource from '../../../config/resource'; 
import { CognitoUserAttribute, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import UserPool from '../../auth/signin/UserPool';

const CognitoLogin = ({ className, ...rest }) => {
  const scriptedRef = useScriptRef();
  const initialState = {
    isLoggedIn: false,
    isInitialised: false,
    user: null
  };

  const swalAlert = ((type, text) => {
    Swal.fire({
      title: '',
      type: type,
      text: text,
      position: "center",
      timer: 3000,
      icon: type,
      showConfirmButton: false
    });
  })

  const validate = (email) => {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    return expression.test(String(email).toLowerCase())
  }


  const { cognitoLogin } = useAuth();
  const reducer = (state, action) => {
    switch (action.type) {
      case FIREBASE_STATE_CHANGED: {
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

  const [state, dispatch] = useReducer(reducer, initialState);
  const [firstLogin, setFirstLogin] = useState(false)
  const [userAttr, setUserAttr] = useState({});
  const[isLoading, setisLoading] = useState(false);

  function logInCognito(email, password){
    setisLoading(true);
    const user = new CognitoUser({
      Username: email,
      Pool: UserPool
    })

    const authUser = new AuthenticationDetails({
      Username: email,
      Password: password
    })

    let newPassword = password;

    var dataEmail = {
      Name: 'email',
      Value: password,
    };

    var attributeEmail = new CognitoUserAttribute(dataEmail);
    var attributeList = [];
    attributeList.push(attributeEmail);

     user.authenticateUser(authUser, {
      onSuccess: (data) => {
        swalAlert('success', resource.LogIn.MsgSuccessfullyLoggedIn)
        cognitoLogin(data.idToken.payload["cognito:username"], user.Username,user.sub);
      
      },
      onFailure: (err) => {
        swalAlert('warning', resource.LogIn.ErrMsgIncorrectUserNamePassword);
        //console.error("onFailure", err)
        setisLoading(false)
      },
      newPasswordRequired: data => {
        
        setFirstLogin(true)
        setUserAttr(data.email)

        user.completeNewPasswordChallenge(newPassword, userAttr, {
          onSuccess: result => {
            swalAlert('success', resource.LogIn.MsgSuccessfullyLoggedIn);
            cognitoLogin(user.username, user.username,user.sub);
           
          },
          onFailure: (err) => {
            console.log(err)
            setisLoading(false);
          }
        });
      }
    });
  }

  return (
    <React.Fragment>
      <Formik

        initialValues={{
          email: '',
          password: '',
          submit: null
        }}
        
        onSubmit={async (values, {

          //setErrors,
          setStatus,
          setSubmitting
        }) => {
          try {
            if (values.email == "" || values.email == null || values.email == undefined || values.password == "" || values.password == null || values.password == undefined) {
              if (values.email == "" || values.email == null || values.email == undefined) {
                swalAlert('warning', resource.LogIn.ErrMsgIncorrectUserNamePassword);
              }
              else if (values.password == "" || values.password == null || values.password == undefined) {
                swalAlert('warning', resource.LogIn.ErrMsgIncorrectUserNamePassword);
              }
            }
            else {
              var isValidEmail = validate(values.email);
              if (!isValidEmail) {
                swalAlert('warning', resource.LogIn.ErrMsgIncorrectUserNamePassword);
              }
              else {
                logInCognito(values.email, values.password)
                //await cognitoLogin(values.email, values.password);
                if (scriptedRef.current) {
                  setStatus({ success: true });
                  setSubmitting(true);
                }
              }

            }


          } catch (err) {
            console.error(err);
            if (scriptedRef.current) {
              setStatus({ success: false });
              //setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values
        }) => (
          <form
            noValidate
            onSubmit={handleSubmit}
            className={className}
            {...rest}
          >

            <div className="form-group mb-3">

              <input
                className="form-control"
                //error={touched.email && errors.email}
                label="Username"
                name="email"
                placeholder={resource.LogIn.LblUserName}
                onBlur={handleBlur}
                onChange={handleChange}
                type="email"
                value={values.email}
              />
              
            </div>
            <div className="form-group mb-4">
              <input
                className="form-control"
                label="Password"
                name="password"
                placeholder={resource.LogIn.LblPassword}
                onBlur={handleBlur}
                onChange={handleChange}
                type="password"
                value={values.password}
              />
            </div>

            {errors.submit && (
              <Col sm={12}>
                <Alert variant='danger'>{errors.submit}</Alert>
              </Col>
            )}
           
            <Row>
              <Col mt={2}>
                <Button
                  className="btn-block"
                  color="primary"
                  disabled={isLoading}
                  size="large"
                  type="submit"
                  variant="primary"
                >
                  {resource.LogIn.BtnSignIn}
                </Button>
              </Col>
            </Row>
            
          </form>
          
        )}
      </Formik>

    </React.Fragment>
  );
};

export default CognitoLogin;
