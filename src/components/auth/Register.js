import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Form, Button } from "react-bootstrap";
import TextInput from "../common/TextInput";

class LogIn extends Component {
  handleSubmit = () => {};

  renderError = (errors, touched) => {
    if (!!errors) {
      return (
        <Form.Control.Feedback type="invalid">{errors}</Form.Control.Feedback>
      );
    } else if (touched && !errors) {
      return (
        <Form.Control.Feedback type="valid">Looks good!!</Form.Control.Feedback>
      );
    }
  };

  render() {
    const RegisterSchema = Yup.object().shape({
      email: Yup.string()
        .required("Email field is required")
        .email("Invalid email"),
      password: Yup.string()
        .required("Password field is required")
        .min(8, "Password must be at least 8 characters")
        .test(
          "regex",
          "Password must contain (uppercase, lowercase, number and special character)  eg.  4q6xmt@94;CNewH! ",
          val => {
            let regExp = new RegExp(
              "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$"
            );
            // console.log(regExp.test(val), regExp, val);
            return regExp.test(val);
          }
        ),
      confirmPassword: Yup.string()
        .required("Confirm password is required")
        .oneOf([Yup.ref("password"), null], "Passwords must match")
    });

    const initialValues = { email: "", password: "", confirmPassword: "" };

    return (
      <div className="container login__forms">
        <h1>Register</h1>
        <Formik validationSchema={RegisterSchema} initialValues={initialValues}>
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            errors
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <TextInput
                type="email"
                name="email"
                placeholder="Enter email address"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.email && !errors.email ? true : false}
                isInvalid={!!errors.email ? true : false}
                renderErrorText={this.renderError(errors.email, touched.email)}
              />
              <TextInput
                type="password"
                name="password"
                placeholder="Enter password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.password && !errors.password ? true : false}
                isInvalid={!!errors.password ? true : false}
                renderErrorText={this.renderError(
                  errors.password,
                  touched.password
                )}
              />

              <TextInput
                type="password"
                name="confirmPassword"
                placeholder="Repeat password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={
                  touched.confirmPassword && !errors.confirmPassword
                    ? true
                    : false
                }
                isInvalid={!!errors.confirmPassword ? true : false}
                renderErrorText={this.renderError(
                  errors.confirmPassword,
                  touched.confirmPassword
                )}
              />
              <Button className="login__forms-button" type="submit">
                Register
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default LogIn;