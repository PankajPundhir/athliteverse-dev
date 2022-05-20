import { useState } from 'react';
import { Button, Form } from "react-bootstrap";
import * as Constant from '../../../config/constant';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { domainlist } from '../../../../src/views/shared/edulist';
import ImgLogin from '../../../assets/images/business_img.jpg';
import LogoHeader from '../../../assets/images/logo1.svg';
import LogoHeadermb from '../../../assets/images/logo-mb.svg';
import { preRegister } from '../../../config/resource';

function Register() {

  const [athleteFirstName, setathleteFirstName] = useState('');
  const [athleteLastName, setathleteLastName] = useState('');
  const [athleteEmail, setAthleteEmail] = useState('');
  const [athleteInstaId, setathleteInstaId] = useState('');
  const [businessName, setbusinessName] = useState('');
  const [businessEmail, setbusinessEmail] = useState('');
  const [isBusinessProfile, setisBusinessProfile] = useState(false);
  const [allFieldRequired, setallFieldRequired] = useState(false);
  const [atheleteNameRequired, setatheleteNameRequired] = useState(false);
  const [atheleteLastNameRequired, setatheleteLastNameRequired] = useState(false);
  const [atheleteInstaRequired, setatheleteInstaRequired] = useState(false);
  const [atheleteEmailRequired, setatheleteEmailRequired] = useState(false);
  const [atheleteEmailalreadyRegistered, setatheleteEmailalreadyRegistered] = useState(false);
  const [atheleteValidEmailRequired, setatheleteValidEmailRequired] = useState(false);
  const [isDisabled, setisDisabled] = useState(false);
  const [businessNameRequired, setbusinessNameRequired] = useState(false);
  const [businessEmailRequired, setbusinessEmailRequired] = useState(false);
  const [businessEmailalreadyRegistered, setbusinessEmailalreadyRegistered] = useState(false);
  const [businessCityRequired, setbusinessCityRequired] = useState(false);
  const [businesszipCodeRequired, setbusinesszipCodeRequired] = useState(false);
  const [businessContactFNameRequired, setbusinessContactFNameRequired] = useState(false);
  const [businessContactLNameRequired, setbusinessContactLNameRequired] = useState(false);
  const [businessCity, setbusinessCity] = useState('');
  const [businesszipCode, setbusinesszipCode] = useState('');
  const [businessConFName, setbusinessConFName] = useState('');
  const [businessConLName, setbusinessConLName] = useState('');
  const [athleteInstaValidated, setathleteInstaValidated] = useState(true);
  const [isActive1, setActive1] = useState('true');
  const [isActive2, setActive2] = useState();
  let address1Field;
  let autocomplete;

  const history = useHistory();

  //#region Autocomplete City and ZipCode

  function initAutocomplete() {
    address1Field = document.querySelector("#business-city");

    autocomplete = new window.google.maps.places.Autocomplete(address1Field, {
      componentRestrictions: { country: ["us"] },
      fields: ["address_components", "geometry"],
      types: ["(cities)"],
    });


    autocomplete.addListener("place_changed", fillInAddress);
  }

  function fillInAddress() {
    // Get the place details from the autocomplete object.
    const place = autocomplete.getPlace();
    let cityName = "";
    let postcode = "";
    setbusinessCity(cityName);
    setbusinesszipCode(postcode);

    // Get each component of the address from the place details,
    // and then fill-in the corresponding field on the form.
    // place.address_components are google.maps.GeocoderAddressComponent objects
    // which are documented at http://goo.gle/3l5i5Mr

    for (const component of place.address_components) {
      const componentType = component.types[0];

      switch (componentType) {
        case "postal_code": {
          postcode = `${component.long_name}${postcode}`;
          setbusinesszipCode(postcode);
          if (postcode === "" || postcode === null || postcode === undefined) {
            setbusinesszipCodeRequired(true);
          }
          else {
            setbusinesszipCodeRequired(false);
          }
          break;
        }
        case "locality":
          cityName = component.long_name;
          setbusinessCity(cityName);
          if (cityName === "" || cityName === null || cityName === undefined) {
            setbusinessCityRequired(true);
          }
          else {
            setbusinessCityRequired(false);
          }
          break;
        default:
          break;

      }
    }

  }

  //#endregion


  const RegisteredAthelete = () => {
    setisDisabled(false);
    setisBusinessProfile(false);
    setathleteFirstName('');
    setathleteLastName('');
    setAthleteEmail('');
    setathleteInstaId('');
    setbusinessName('');
    setbusinessEmail('');
    setallFieldRequired(false);
    setatheleteNameRequired(false);
    setatheleteLastNameRequired(false);
    setatheleteInstaRequired(false);
    setatheleteEmailRequired(false);
    setatheleteEmailalreadyRegistered(false);
    setatheleteValidEmailRequired(false);
    setbusinessNameRequired(false);
    setbusinessEmailRequired(false);
    setbusinessEmailalreadyRegistered(false);
    setbusinessCityRequired(false);
    setbusinesszipCodeRequired(false);
    setbusinessContactFNameRequired(false);
    setbusinessContactLNameRequired(false);
    setbusinessCity('');
    setbusinesszipCode('');
    setbusinessConFName('');
    setbusinessConLName('');
    setathleteInstaValidated(true);
    setActive1(true);
    setActive2(false);
    var athleteform = document.getElementById("athleteregisterform");
    var businessform = document.getElementById("businessregisterform");
    if (athleteform !== null && athleteform !== "") {
      document.getElementById("athleteregisterform").reset();
    }
    if (businessform !== null && businessform !== "") {
      document.getElementById("businessregisterform").reset();
    }
  }

  const RegisteredBusiness = () => {
    setisDisabled(false);
    setisBusinessProfile(true);
    setathleteFirstName('');
    setathleteLastName('');
    setAthleteEmail('');
    setathleteInstaId('');
    setbusinessName('');
    setbusinessEmail('');
    setallFieldRequired(false);
    setatheleteNameRequired(false);
    setatheleteLastNameRequired(false);
    setatheleteInstaRequired(false);
    setatheleteEmailRequired(false);
    setatheleteEmailalreadyRegistered(false);
    setatheleteValidEmailRequired(false);
    setbusinessNameRequired(false);
    setbusinessEmailRequired(false);
    setbusinessEmailalreadyRegistered(false);
    setbusinessCityRequired(false);
    setbusinesszipCodeRequired(false);
    setbusinessContactFNameRequired(false);
    setbusinessContactLNameRequired(false);
    setbusinessCity('');
    setbusinesszipCode('');
    setbusinessConFName('');
    setbusinessConLName('');
    setathleteInstaValidated(true);
    setActive1(false);
    setActive2(true);
    var athleteform = document.getElementById("athleteregisterform");
    var businessform = document.getElementById("businessregisterform");
    if (athleteform !== null && athleteform !== "") {
      document.getElementById("athleteregisterform").reset();
    }
    if (businessform !== null && businessform !== "") {
      document.getElementById("businessregisterform").reset();
    }
  }


  //#region Get Player Details By PlayerId
  const AddAthelete = async () => {
    setatheleteEmailalreadyRegistered(false);
    setisDisabled(true);
    try {
      await axios.post(
        Constant.GraphQL_API, {
        query: Constant.PreRegisterAthlete,
        variables: { businessname: "", emailid: athleteEmail, firstname: athleteFirstName, instagramname: athleteInstaId, isathlete: true, latestnewsrequired: false, zipcode: null, city: "", lastname: athleteLastName }
      }, {
        headers: {
          'x-hasura-admin-secret': Constant.GraphQL_Key
        }
      }
      ).then(res => {
        setisDisabled(false);
        if (res.data.data !== undefined && res.data.data.insert_ath_ath_m_user_registration.affected_rows === 1) {
          history.push("/home");

        }
        else if (res.data.errors !== undefined) {
          if (res.data.errors[0].message === preRegister.lblduplicateviolationMsg) {//'Uniqueness violation. duplicate key value violates unique constraint \"ath_m_user_registration_emailid_key\"') {
            setatheleteEmailalreadyRegistered(true);
          }
          else {
          }
        }
        console.log(res);
      });
    }
    catch (err) {
      setisDisabled(false);
      console.log(err);
    }
  };
  //#endregion

  //#region Get Player Details By PlayerId
  const AddBusiness = async () => {
    setisDisabled(true);
    setbusinessEmailalreadyRegistered(false);
    try {
      await axios.post(
        Constant.GraphQL_API, {
        query: Constant.PreRegisterAthlete,
        variables: { businessname: businessName, emailid: businessEmail, firstname: businessConFName, instagramname: "", isathlete: false, latestnewsrequired: false, zipcode: businesszipCode, city: businessCity, lastname: businessConLName }
      }, {
        headers: {
          'x-hasura-access-key': Constant.GraphQL_Key
        }
      }
      ).then(res => {
        setisDisabled(false);
        if (res.data.data !== undefined && res.data.data.insert_ath_ath_m_user_registration.affected_rows === 1) {
          history.push("/success");

        }
        else if (res.data.errors !== undefined) {
          if (res.data.errors[0].message === preRegister.lblduplicateviolationMsg) {
            setbusinessEmailalreadyRegistered(true);
          }
          else {
          }


        }
        console.log(res);
      });
    }
    catch (err) {
      setbusinessEmailalreadyRegistered(false);
      setisDisabled(false);
      console.log(err);
    }
  };
  //#endregion

  //#region Validate Insta User
  // const ValidateInstaUser = async () => {
  //   setathleteInstaValidated(false);
  //   setisDisabled(true);
  //   var isValidInstaUser = false; 
  //   try {
  //     axios({
  //       method: "get",
  //       url: `https://images2963-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=https://www.instagram.com/${athleteInstaId}`,
  //       headers: { "Content-Type": "text/html; charset=UTF-8" },
  //     })
  //       .then(function (response) {
  //         setisDisabled(false);
  //         isValidInstaUser = true;
  //         setathleteInstaValidated(true);
  //       })
  //       .catch(function (response) {
  //         setisDisabled(false);
  //         setathleteInstaValidated(false);
  //         isValidInstaUser = true;
  //       });
  //       return isValidInstaUser;
  //   }
  //   catch (err) {
  //     setisDisabled(false);
  //     setathleteInstaValidated(false);
  //     console.log(err);
  //   }
  // };
  //#endregion


  //#region Validate Email
  const validateEmail = (email) => {
    var isValidate = false;
    isValidate = validateBusinessEmail(email);
    if (isValidate) {
      isValidate = false;
      domainlist.forEach(element => {
        element.domains.forEach(ele => {
          ele = "@" + ele;
          if (isValidate === false) {
            if (email.endsWith(ele)) {
              isValidate = true;
              return false;
            }
          }

        });
      });
    }
    return isValidate;
  }

  //#region Validate Email
  const validateBusinessEmail = (email) => {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return expression.test(String(email).toLowerCase())
  }



  //#endregion

  // Handling the Business name change
  const handleBusinessName = (e) => {
    if (e.target.value === '') {
      setbusinessNameRequired(true);
    }
    else {
      setbusinessNameRequired(false);
    }

    setbusinessName(e.target.value);
  };

  // Handling the Business email change
  const handleBusinessEmail = (e) => {
    if (e.target.value === '') {
      setbusinessEmailRequired(true);
    }
    else {
      setbusinessEmailRequired(false);
    }
    setbusinessEmail(e.target.value);
  };

  // Handling the Business City change
  const handleBusinessCity = (e) => {
    initAutocomplete();

    const re = /^[a-zA-Z\s]+$/;
    var cityVal = re.test(e.target.value);
    if (cityVal || e.target.value === '') {
      if (e.target.value === '') {
        setbusinessCityRequired(true);
      }
      else {
        setbusinessCityRequired(false);
      }
      setbusinessCity(e.target.value);
    }

  };

  // Handling the Business zipCode change
  const handleBusinesszipCode = (e) => {
    var zipValue = e.target.value.replace(/[^\d{6}]$/, "").substr(0, 6);
    if (zipValue === '') {
      setbusinesszipCodeRequired(true);
    }
    else {
      setbusinesszipCodeRequired(false);
    }
    setbusinesszipCode(zipValue);


  };

  // Handling the Business Contact FirstName change
  const handleBusinessContactFirstName = (e) => {
    const re = /^[A-Za-z]+$/;
    var nameVal = re.test(e.target.value);
    if (nameVal || e.target.value === '') {
      if (e.target.value === '') {
        setbusinessContactFNameRequired(true);
      }
      else {
        setbusinessContactFNameRequired(false);
      }
      setbusinessConFName(e.target.value);
    }
  };

  // Handling the Business email change
  const handleBusinessContactLastName = (e) => {
    const re = /^[A-Za-z]+$/;
    var nameVal = re.test(e.target.value);
    if (nameVal || e.target.value === '') {
      if (e.target.value === '') {
        setbusinessContactLNameRequired(true);
      }
      else {
        setbusinessContactLNameRequired(false);
      }
      setbusinessConLName(e.target.value);
    }
  };


  // Handling the First name change
  const handleAtheleteFirstName = (e) => {
    const re = /^[A-Za-z]+$/;
    var nameVal = re.test(e.target.value);
    if (nameVal || e.target.value === '') {
      if (e.target.value === '') {
        setatheleteNameRequired(true);
      }
      else {
        setatheleteNameRequired(false);
      }
      setathleteFirstName(e.target.value);
    }
  };

  // Handling the Last name change
  const handleAtheleteLastName = (e) => {
    const re = /^[A-Za-z]+$/;
    var nameVal = re.test(e.target.value);
    if (nameVal || e.target.value === '') {
      if (e.target.value === '') {
        setatheleteLastNameRequired(true);
      }
      else {
        setatheleteLastNameRequired(false);
      }
      setathleteLastName(e.target.value);
    }
  };

  // Handling the email change
  const handleAtheleteEmail = (e) => {
    if (e.target.value === '') {
      setatheleteEmailRequired(true);
    }
    else {
      setatheleteEmailRequired(false);
    }
    setAthleteEmail(e.target.value);
  };

  // Handling the password change
  const handleAtheleteInsta = (e) => {
    setathleteInstaValidated(true);
    const re = /^[A-Za-z0-9]+$/;
    var nameVal = re.test(e.target.value);
    if (nameVal || e.target.value === '') {
      if (e.target.value === '') {
        setatheleteInstaRequired(true);
      }
      else {
        setatheleteInstaRequired(false);
      }
      setathleteInstaId(e.target.value);
    }
    else {
      setathleteInstaValidated(false);
      setatheleteInstaRequired(false);
    }

    // setathleteInstaId(e.target.value);
  };

  // Handling the form submission for athelete
  const handleSubmit = (e) => {
    e.preventDefault();
    setatheleteEmailalreadyRegistered(false);
    setallFieldRequired(false);
    if (athleteFirstName === '' && athleteEmail === '' && athleteInstaId === '' && athleteLastName === '') {
      setallFieldRequired(true);
    }
    else if (athleteFirstName === '' || athleteLastName === '' || athleteEmail === '' || athleteInstaId === '') {
      if (athleteFirstName === '') {
        setatheleteNameRequired(true);
      }
      else {
        setatheleteNameRequired(false);
      }

      if (athleteLastName === '') {
        setatheleteLastNameRequired(true);
      }
      else {
        setatheleteLastNameRequired(false);
      }

      if (athleteInstaId === '') {
        setatheleteInstaRequired(true);
      }
      else {
        setatheleteInstaRequired(false);
      }

      if (athleteEmail === '') {
        setatheleteEmailRequired(true);
      }
      else {
        setatheleteEmailRequired(false);
        var isValidEmail = validateEmail(athleteEmail);
        if (!isValidEmail) {
          setatheleteValidEmailRequired(true);
        }
        else {
          setatheleteValidEmailRequired(false);
        }
      }
    }
    else {

      setathleteInstaValidated(true);
      setisDisabled(true);
      var isValidInstaUser = false;

      axios({
        method: "get",
        url: `https://images2963-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=https://www.instagram.com/${athleteInstaId}`,
        headers: { "Content-Type": "text/html; charset=UTF-8" },
      })
        .then(function (response) {
          setisDisabled(false);
          isValidInstaUser = true;
          setathleteInstaValidated(true);
          if (isValidInstaUser) {
            var isValidEmail = validateEmail(athleteEmail);
            if (!isValidEmail) {
              setatheleteValidEmailRequired(true);
            }
            else {
              setatheleteValidEmailRequired(false);
              AddAthelete();
            }
          }
        })
        .catch(function (response) {
          setisDisabled(false);
          setathleteInstaValidated(false);
          isValidInstaUser = false;
          var isValidEmail = validateEmail(athleteEmail);
          if (!isValidEmail) {
            setatheleteValidEmailRequired(true);
          }
          else {
            setatheleteValidEmailRequired(false);
          }
        });
    }
  };

  // Handling the form submission for athelete
  const handleBusinessSubmit = (e) => {
    e.preventDefault();
    setbusinessEmailalreadyRegistered(false);
    setallFieldRequired(false);
    if (businessName === '' && businessEmail === '' && businessCity === "" && businessConFName === "" && businessConLName === "" && businesszipCode === "") {
      setallFieldRequired(true);
    }
    else if (businessName === '' || businessEmail === '' || businessCity === "" || businessConFName === "" || businessConLName === "" || businesszipCode === "") {
      if (businessName === '') {
        setbusinessNameRequired(true);
      }
      else {
        setbusinessNameRequired(false);
      }

      if (businessEmail === '') {
        setbusinessEmailRequired(true);
      }
      else {
        var isValidEmail = validateBusinessEmail(businessEmail);
        if (isValidEmail) {
          setbusinessEmailRequired(false);
        }
        else {
          setbusinessEmailRequired(true);
        }
      }
      if (businessCity === '') {
        setbusinessCityRequired(true);
      }
      else {
        setbusinessCityRequired(false);
      }
      if (businesszipCode === '') {
        setbusinesszipCodeRequired(true);
      }
      else {
        setbusinesszipCodeRequired(false);
      }
      if (businessConFName === '') {
        setbusinessContactFNameRequired(true);
      }
      else {
        setbusinessContactFNameRequired(false);
      }
      if (businessConLName === '') {
        setbusinessContactLNameRequired(true);
      }
      else {
        setbusinessContactLNameRequired(false);
      }


    }
    else {
      var isValidEmails = validateBusinessEmail(businessEmail);
      if (!isValidEmails) {
        setbusinessEmailRequired(true);
      }
      else {
        setbusinessEmailRequired(false);
        AddBusiness();

      }

    }
  };


  return (
    <>
      {!isDisabled ?
        <>
          <div></div>
        </>
        : <div className="spinner-overlay d-flex align-items-center justify-content-center">
          <div className="show-spinner"></div>
        </div>
      }
      <div className='h-100'>
        <div className='fixed-bg-login'></div>
        <div className='wrap-login pl-2 pr-2  pl-md-2 pr-md-2  pl-lg-3 pr-lg-3'>
          <header className='pt-3 d-flex justify-content-center flex-wrap justify-content-md-between align-items-top '>
            {/* <div className='logo-w-login'></div> */}
            <img src={LogoHeader} className="img-fluid logo-w-login mb-3 mb-md-0 d-none d-md-none d-lg-block" alt="logo" />
            <img src={LogoHeadermb} className="img-fluid logo-w-login mb-3 mb-md-0 d-block d-md-block d-lg-none" alt="logo" />
            <div>
              <div className="d-flex flex-wrap justify-content-center justify-content-md-end align-items-center">
                <div>
                  <a href="/faq" target="_blank" rel="noreferrer" className='mr-3 d-mb-none'>FAQ</a>
                  <Button variant="secondary" onClick={RegisteredAthelete} className={`mr-3 w-btn ${isActive1 ? "active" : ""}`}>Athlete</Button>
                  <Button variant="secondary" onClick={RegisteredBusiness} className={`w-btn ${isActive2 ? "active" : ""}`}>Business</Button>
                </div>
                <div className='mt-2 mt-md-0 pr-lg-1'>
                  <a href="https://www.instagram.com/athletiverse/?igshid=YTM0ZjI4ZDI=" className='mr-3 ml-3' target="_blank" rel="noreferrer">
                    <i className="feather icon-instagram x-2 cursorPointer"></i></a>
                  <a href="https://twitter.com/athletiverse?s=21&t=xjbRxKX8zOsIwx2JN70qZw" target="_blank" rel="noreferrer"><i className="feather icon-twitter x-2 cursorPointer"></i></a>
                </div>
              </div>

            </div>
          </header>
          <div className='d-flex justify-content-center align-items-center wrap-pt-login'>
            {!isBusinessProfile ?
              <div className='col-12 col-md-10 mx-auto my-auto'>

                <div className='pt-0 mt-3 mt-md-0 mt-lg-0 pt-lg-0'><h1 className='mb-4 mb-md-3'>Join the waitlist for early access</h1></div>
                <div className='row wrap-main-login'>
                  <div className='col-md-12 col-lg-6 text-center pl-lg-0'>
                    <img src={ImgLogin} className="img-fluid mb-1 signin-img" alt="logo" />
                    <div className='pt-2 max-py'><p className='mb-0'>Earn your worth!  Athletiverse allows student-athletes to monetize their NIL through engagements with businesses that pay you to rep their businesses on social media.  Athletiverse is always free to student-athletes and does not require long term commitment or exclusivity.</p></div>

                  </div>
                  <div className='col-md-12 col-lg-6 pr-lg-0'>
                    <div className='text-center'>

                      <Form id="athleteregisterform" className='pl-2 pr-2 pl-md-0 pr-md-0' onSubmit={handleSubmit}>
                        {allFieldRequired ? <p className="text-c-red">* All fields are required.</p> : ''}
                        <div className='row'>
                          <div className='col-12 col-md-6 col-lg-6'>
                            <Form.Group className='mb-3'>
                              <Form.Control type="text" value={athleteFirstName} onChange={handleAtheleteFirstName} placeholder="First Name*" />
                              {atheleteNameRequired ? <span className="text-c-red d-flex justify-content-start">Please enter First Name.</span> : ''}
                            </Form.Group>
                          </div>
                          <div className='col-12 col-md-6 col-lg-6'>
                            <Form.Group className='mb-3'>
                              <Form.Control type="text" value={athleteLastName} onChange={handleAtheleteLastName} placeholder="Last Name*" />
                              {atheleteLastNameRequired ? <span className="text-c-red d-flex justify-content-start">Please enter Last Name.</span> : ''}
                            </Form.Group>
                          </div>
                        </div>
                        <Form.Group className='mb-3'>
                          <Form.Control type="text" onChange={handleAtheleteInsta} placeholder="Instagram*" />
                          {!athleteInstaValidated ? <span className="text-c-red d-flex justify-content-start">Instagram user does not exist.</span> : ''}
                          {atheleteInstaRequired ? <span className="text-c-red d-flex justify-content-start">Please enter an Instagram ID.</span> : ''}
                        </Form.Group>
                        <Form.Group className='mb-3'>
                          <Form.Control type="text" onChange={handleAtheleteEmail} placeholder="Student (edu) Email ID*" />
                          {atheleteValidEmailRequired || atheleteEmailRequired ? <span className="text-c-red d-flex justify-content-start">Athletiverse requires your school email ID ending with .edu.</span> : ''}
                          {atheleteEmailalreadyRegistered ? <p className="text-c-red d-flex justify-content-start">Email ID is already registered.</p> : ''}
                        </Form.Group>
                        <Form.Group className="mb-3 mb-md-3 mb-lg-2 check-privacy">
                          <Form.Check aria-label="option 1" className='pl-4 d-inline' />
                          <span className='pl-3 pl-md-3 pl-lg-2 mb-checkbox f14'>Yes, I would like to receive the latest news about Athletiverse. I understand I can unsubscribe at any time.
                          </span>
                        </Form.Group>
                        <Button variant="primary" disabled={isDisabled} type="submit" className='mr-0 mt-2 pl-3 pr-3 pl-md-4 pr-md-4'>
                          Join Waitlist
                        </Button>
                      </Form>
                    </div>
                  </div>
                </div>

              </div>
              :
              <div className='col-12 col-md-10 mx-auto my-auto text-center'>
                <div className='pt-0 mt-3 mt-md-0 mt-lg-0 pt-lg-0'><h1 className='mb-4 mb-md-3'>Join the waitlist for early access</h1></div>
                <div className='row wrap-main-login'>
                  <div className='col-md-12 col-lg-6 text-center pl-lg-0'>
                    <img src={ImgLogin} className="img-fluid mb-1 signin-img" alt="logo" />
                    <div className='pt-2 max-py'><p className='mb-0'>Drive your advertising and promotional messages by engaging student-athletes to carry your message to their social media followers.  Whether a local, national or international business, Athletiverse is the most cost effective and flexible platform for growing your business.</p></div>

                  </div>
                  <div className='col-md-12 col-lg-6 pr-lg-0'>
                    <div className='pb-0 pb-md-2'>

                      <Form id="businessregisterform" className='pl-2 pr-2 pl-md-0 pr-md-0' onSubmit={handleBusinessSubmit}>
                        {allFieldRequired ? <p className="text-c-red">* All fields are required.</p> : ''}
                        <div>
                          <Form.Group className='mb-3'>
                            <Form.Control type="text" onChange={handleBusinessName} placeholder="Business Name*" />
                            {businessNameRequired ? <p className="text-c-red d-flex justify-content-start">Please enter Business Name.</p> : ''}
                          </Form.Group>
                        </div>
                        <div className='row'>
                          <div className='col-12 col-md-6 col-lg-6'>
                            <Form.Group className='mb-3'>
                              <Form.Control type="text" id='business-city' value={businessCity} onChange={handleBusinessCity} placeholder="City Name*" />
                              {businessCityRequired ? <p className="text-c-red d-flex justify-content-start">Please enter City Name.</p> : ''}
                            </Form.Group>
                          </div>
                          <div className='col-12 col-md-6 col-lg-6'>
                            <Form.Group className='mb-3'>
                              <Form.Control type="text" onChange={handleBusinesszipCode} value={businesszipCode} placeholder="Zip Code*" />
                              {businesszipCodeRequired ? <p className="text-c-red d-flex justify-content-start">Please enter a valid Zip Code.</p> : ''}
                            </Form.Group>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-12 col-md-6 col-lg-6'>
                            <Form.Group className='mb-3'>
                              <Form.Control type="text" value={businessConFName} onChange={handleBusinessContactFirstName} placeholder="Contact First Name*" />
                              {businessContactFNameRequired ? <p className="text-c-red d-flex justify-content-start">Please enter Contact First Name.</p> : ''}
                            </Form.Group>
                          </div>
                          <div className='col-12 col-md-6 col-lg-6'>
                            <Form.Group className='mb-3'>
                              <Form.Control type="text" value={businessConLName} onChange={handleBusinessContactLastName} placeholder="Contact Last Name*" />
                              {businessContactLNameRequired ? <p className="text-c-red d-flex justify-content-start">Please enter Contact Last Name.</p> : ''}
                            </Form.Group>
                          </div>
                        </div>

                        <Form.Group className='mb-3'>
                          <Form.Control type="text" onChange={handleBusinessEmail} placeholder="Email ID*" />
                          {businessEmailRequired ? <span className="text-c-red d-flex justify-content-start">Please enter a valid Email ID.</span> : ''}
                          {businessEmailalreadyRegistered ? <span className="text-c-red d-flex justify-content-start">Email Id is already registered.</span> : ''}
                        </Form.Group>
                        <Form.Group className="mb-3 mb-md-3 mb-lg-2 check-privacy">
                          <Form.Check aria-label="option 1" className='pl-4 d-inline' />
                          <span className='pl-3 pl-md-3 pl-lg-2 mb-checkbox f14'>Yes, I would like to receive the latest news about Athletiverse. I understand I can unsubscribe at any time.
                          </span>
                        </Form.Group>

                        <Button variant="primary" type="submit" disabled={isDisabled} className='mr-0 mt-2 pl-3 pr-3 pl-md-4 pr-md-4'>
                          Join Waitlist
                        </Button>
                      </Form>
                    </div>
                  </div>
                </div>


              </div>
            }
          </div>


        </div>
        <footer className='footer-wrap col-md-12'>
          <div className='d-flex flex-wrap justify-content-center justify-content-md-center justify-content-lg-between align-items-center'>
            <div>
              <p className='cpyright mr-0 mr-md-3 mr-lg-0'>&copy; Copyright 2022 Athletiverse, Inc. All Rights Reserved. <a href="/privacypolicy" target="_blank" rel="noreferrer">Privacy Policy</a> | <a href="/termsofuse" target="_blank" rel="noreferrer">Terms and Conditions</a></p>
            </div>
            <div>
              <p className='cpyright1'>Follow Us: <a href="https://www.instagram.com/athletiverse/?igshid=YTM0ZjI4ZDI=" className='mr-3 ml-3' target="_blank" rel="noreferrer">
                <i className="feather icon-instagram x-2 cursorPointer"></i></a>
                <a href="https://twitter.com/athletiverse?s=21&t=xjbRxKX8zOsIwx2JN70qZw" target="_blank" rel="noreferrer"><i className="feather icon-twitter x-2 cursorPointer"></i></a></p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}


export default Register;