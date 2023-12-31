import React, { useEffect }  from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

function SignIn({ signedUser, setSignedUser }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (signedUser) {
      navigate("/");
    }
  }, [signedUser, navigate]);

  const formSchema = yup.object().shape({
    username: yup.string().min(2, "Too Short").required("Required"),
    password: yup.string().min(4, "Too Short!").required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values, null, 2),
      }).then((r) => {
        if (r.ok) {
          r.json().then((userData) => {
            setSignedUser(userData);
            navigate("/");
          });
        } else {
          alert("Incorrect username or password");
          console.log(r)
        }
      });
    },
  });

    return (
      <Container className="w-25 position-absolute m-3">
        <p className="fs-4 fw-medium">Sign In</p>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Label className="fw-medium mt-2" htmlFor="inputLogin">
            Login
          </Form.Label>
          <Form.Control
            type="username"
            name="username"
            id="inputUsername"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          <p style={{ color: "red" }}> {formik.errors.username}</p>
          <Form.Label className="fw-medium mt-2" htmlFor="inputPassword">
            Password
          </Form.Label>
          <Form.Control
            type="password"
            name="password"
            id="inputPassword"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <p style={{ color: "red" }}> {formik.errors.password}</p>
          <Button className="mt-2" as="input" type="submit" value="Submit" />
        </Form>
        <p className="mt-2 fs-6">
          Not registered? <a href="/signup">Sign up</a>
        </p>
      </Container>
    );
  }

export default SignIn;
