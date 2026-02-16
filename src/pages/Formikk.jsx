import { useFormik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Formikk = () => {
  const [loading, setloading] = useState(false);
  const navigate= useNavigate()
  let formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },

    onSubmit: async () => {
      console.log(formik.values);
      setloading(true);

      try {
        const response = await axios.post(
          "http://localhost:8080/api/v1/auth/signUp",
          formik.values
        );

        console.log(response.data);
        let userToStore = response.data.data;
        localStorage.setItem("user", JSON.stringify(userToStore));
        localStorage.setItem("token", response.data.token);

        alert(response.data.message);
        setloading(false);
        navigate('/about', {replace:true})
      } catch (error) {
        console.log(error);
        setloading(false);
      }
    },

    validationSchema: yup.object({
      name: yup.string().required("Your name is required"),
      username: yup.string().required("username is required"),
      email: yup
        .string()
        .required("Email name is required")
        .email("invalid email format"),
      password: yup
        .string()
        .required("Password is required")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
          "Must be 8-20 characters, include one uppercase, one lowercase, one number, and one special character"
        ),
    }),
  });
  // console.log(formik.values);
  // console.log(formik.errors);
  // console.log(formik.touched);

  return (
    <div>
      <input
        type="text"
        placeholder="first name"
        name="name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />{" "}
      <br />
      {formik.touched.name && formik.errors.name && (
        <small className="text-danger">{formik.errors.name}</small>
      )}
      <br />
      <input
        type="text"
        placeholder="last name"
        name="username"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <br />
      {formik.touched.username && formik.errors.username && (
        <small className="text-danger">{formik.errors.username}</small>
      )}{" "}
      <br />
      <input
        type="email"
        placeholder="email"
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <br />
      {formik.touched.email && formik.errors.email && (
        <small className="text-danger">{formik.errors.email}</small>
      )}
      <br />
      <input
        type="text"
        placeholder="password"
        name="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <br />
      {formik.touched.password && formik.errors.password && (
        <small className="text-danger">{formik.errors.password}</small>
      )}
      <br />
      <button
        className="btn btn-dark"
        type="Submit"
        onClick={formik.handleSubmit}
      >
        {loading ? (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <p>Submit</p>
        )}
      </button>
    </div>
  );
};

export default Formikk;
