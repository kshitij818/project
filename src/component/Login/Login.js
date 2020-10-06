import React from "react";
import "./Login.css";
import { Container, Row, Col } from "reactstrap";
import {Card,CardBody, Button, FormGroup, Label, Input, FormFeedback,Form ,CardLink} from "reactstrap";
// import {validator} from '../../common/validator';
import { useState } from "react";

// import { Redirect } from "react-router-dom";

// import React from 'react'

function Login(props) {
  const { validator } = props;
  const [validate, setValidate] = useState(validateProperty);
  const [login, setloginState] = useState(loginState);
//   const [redirect,setRedirect]=useState(false);

  const check = (event, propertyName, ...validations) => {
    let flag = true;

    for (const func of validations) {
      if (func(event.target.value)) {
        if (propertyName in validateProperty) {
          setValidate((prevState) => {
            return { ...prevState, [propertyName]: "has-danger" };
          });
        }
        flag = false;
        break;
      }
    }
    if (flag === true) {
      if (propertyName in validateProperty) {
        setValidate((prevState) => {
          return { ...prevState, [propertyName]: "has-success" };
        });
      }
    }
  };
  const handleChange = (event, propertyName) => {
    let value = event.target.value;
    // console.log(value);
    setloginState((prevState) => {
      return { ...prevState, [propertyName]: value };

    });
    
  };

//   const checkValidationForSubmit = () => {
//     for (const key in validate) {
//       if (
//         typeof validate[key] === "string" &&
//         (validate[key] === "has-danger" || validate[key] === "")
//       ) {
//         setValidate((prevState) => {
//           return { ...prevState, [key]: "has-danger" };
//         });
//         return false;
//       } else if (typeof validate[key] === "object") {
//         for (const innerKey in validate[key]) {
//           if (validate[key][innerKey] === "has-danger") {
//             return false;
//           }
//         }
//       }
//     }
//     return true;
//   };
//   const handleChange = (event, propertyName) => {
//     let value = event.target.value;
//     // console.log(value);
//     setloginState((prevState) => {
//       return { ...prevState, [propertyName]: value };

//     });
    
//   };

//   var log = () => {
//       console.log(login.passwordState)
//       if(checkValidationForSubmit()){
//     fetch("https://taskmgtapp.herokuapp.com/user/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email: login.emailState,
//         password: login.passwordState,
//       }),
//     })
//       .then((response) => response.json())
//       .then((result) => {
//         console.log(result.response);
//         if (result.response["session-token"]) {
//           localStorage.setItem("token", result.response["session-token"]);
//              setRedirect(true);
//         //   redirecting();
//         }//  else {
//         //   alert(result.response.error);
//         // }
       
//       })

    
//       .catch((error) => {
//         alert(error);
        
//       });
//     } 
//   };
// const redirecting=()=>{
//   setRedirect(true);
// };
  return (
    <div >
      {/* <Row>
          <Col sm="6"> */}
          <Card className="align">
          <CardBody className="card-align">
         
          <h1 className="align-left">LOGIN</h1><br></br>
             <hr></hr>
             <Row>
          <Col sm="6">
            
              <label  className="align-left">Email Id *</label><br></br>

              <Input
                type="email"
                name="email"
                id="exampleEmail"
                value={login.emailState}
                onChange={(e) => handleChange(e, "emailState")}
                onBlur={(e) =>
                  check(
                    e,
                    "emailCheck",
                    validator.isEmpty,
                    validator.isUndefined
                  )
                }
                valid={validate.emailCheck === "has-success"}
                invalid={validate.emailCheck === "has-danger"}
              />
              <FormFeedback valid>This one is good.</FormFeedback>
              <FormFeedback>Please provide correct input.</FormFeedback>
            </Col>
            </Row>
            <Row>
                <Col sm="6">
                <label  className="align-left">Password *</label> <br></br>

<Input
  type="password"
  name="password"
  id="examplePassword"
  value={login.passwordState}
  onChange={(e) => handleChange(e, "passwordState")}
  onBlur={(e) =>
    check(
      e,
      "passwordCheck",
      validator.isPassword,
      validator.isUndefined,
      validator.isEmpty
    )
  }
  valid={validate.passwordCheck === "has-success"}
  invalid={validate.passwordCheck === "has-danger"}
/>
<FormFeedback valid>This one is good.</FormFeedback>
<FormFeedback>Please provide correct input.</FormFeedback>
                </Col>
            </Row>
              
             
        <Row>
        <Col sm="6">
        
            <FormGroup check>
        <Label check>
          <Input className="align-left" type="checkbox" />{' '}
          Remember me
        </Label>
        
      </FormGroup>
      </Col>
        <Col sm="6">
            
      <Button
            color="primary"
            //   className={login.isLogin ? "login-btn" : "active-login-btn"}
              size="sm"
              
              
            >
              Login
            </Button>
        
            </Col>
            </Row>
           
      
           
           <label>Not A Member yet?</label>
           <CardLink href="#">Register Now </CardLink><br></br>
           <label>Note that fordemo purposes you dont need to register.</label><br/>
           <label>TO login for demo</label>
           < CardLink href="#">Click here?</CardLink>
           <hr></hr>
          </CardBody>
      </Card>
      
              {/* </Col></Row>   */}
      
      
    
    </div>
  );
}

var validateProperty = {
  emailCheck: "",
  passwordCheck: "",
};
var loginState = {
  emailState: "",
  passwordState: "",
  
};

export default Login;

// import React from 'react'
// import {Card,CardBody}


// function Login() {
//     return (
//         <div>
            
//         </div>
//     )
// }

// export default Login
