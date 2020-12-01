import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

import { submitLogin } from "../../actions/loginActions";

const StyledField = styled(Field)`
  width: 60%;
`;
const StyledSubmitButton = styled.button`
  margin: 10px 0;
  width: 50%;
  align-self: center;
`;
const StyledFieldError = styled.span`
  margin-inline-start: 0.5em;
  color: darkred;
`;

const user = {
  id: NaN,
  email: "",
  password: "",
};

const LoginSchema = Yup.object().shape({
  password: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { login, submitLogin } = this.props;
    return (
      <>
        <h3 className="register-title">Login</h3>
        <Formik
          initialValues={user}
          validationSchema={LoginSchema}
          onSubmit={(values, actions) => {
            submitLogin(values).then((res) => {
              actions.setSubmitting(false);
            });
          }}
          render={({ errors, status, touched, isSubmitting }) => {
            return (
              <Form>
                <span>E-mail:</span>
                <div>
                  <StyledField type="email" name="email" />
                  {errors.email && touched.email && (
                    <StyledFieldError>{errors.email}</StyledFieldError>
                  )}
                </div>
                <span>Password:</span>
                <div>
                  <StyledField type="password" name="password" />
                  {errors.password && touched.password && (
                    <StyledFieldError>{errors.password}</StyledFieldError>
                  )}
                </div>
                {login.error && (touched.email || touched.password) && (
                  <p>{login.error}</p>
                )}
                {status && status.msg && <div>{status.msg}</div>}
                <StyledSubmitButton type="submit" disabled={isSubmitting}>
                  Submit
                </StyledSubmitButton>
              </Form>
            );
          }}
        />
      </>
    );
  }
}

function mapStateToProps(store) {
  return {
    login: store.login,
  };
}

export default connect(mapStateToProps, { submitLogin })(Login);
