import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { jwtDecode } from 'jwt-decode';

const Login = () => {
    //collect token, decode token, store in cookies
    let navigate= useNavigate()
    let cookies =new Cookies()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false
    },
    
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required')
    }),
    
    onSubmit: async (values, { setSubmitting, setStatus, resetForm }) => {
      try {
        // Simulate API call
        // console.log('Login values:', values);
        
        // await new Promise(resolve => setTimeout(resolve, 1500));
        
        // setStatus({ success: 'Login successful! Redirecting...' });
        
        setSubmitting(true)
    let response = await axios.post("http://localhost:8080/api/v1/auth/login",formik.values, {
        headers:{
            "Content-Type":"application/json"
        }
    })

    console.log(response.data);
    localStorage.setItem('token', response.data.data.token) 
    
    let user = jwtDecode(response.data.data.token)
    console.log(user);
    
    cookies.set('token', response.data.data.token, {
        expires:new Date(user.exp*1000)
    } )

    
    
    navigate('/admin', {replace:true})


    
        
      } catch (error) {
        console.log(error);
        
        setStatus({ error: 'Invalid email or password. Please try again.' });
      } finally {
        setSubmitting(false);
      }
    }
  });

  // Function to determine input class based on validation
  const getInputClass = (field) => {
    if (formik.touched[field] && formik.errors[field]) {
      return 'form-control is-invalid';
    }
    if (formik.touched[field] && !formik.errors[field]) {
      return 'form-control is-valid';
    }
    return 'form-control';
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="row w-100">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto">
          <div className="card shadow-lg border-0 rounded-lg">
            <div className="card-body p-4 p-md-5">
              {/* Header */}
              <div className="text-center mb-4">
                <h2 className="fw-bold text-primary">Welcome Back</h2>
                <p className="text-muted">Please sign in to your account</p>
              </div>

              {/* Success Message */}
              {formik.status && formik.status.success && (
                <div className="alert alert-success alert-dismissible fade show mb-4" role="alert">
                  {formik.status.success}
                  <button 
                    type="button" 
                    className="btn-close" 
                    onClick={() => formik.setStatus({})}
                    aria-label="Close"
                  ></button>
                </div>
              )}

              {/* Error Message */}
              {formik.status && formik.status.error && (
                <div className="alert alert-danger alert-dismissible fade show mb-4" role="alert">
                  {formik.status.error}
                  <button 
                    type="button" 
                    className="btn-close" 
                    onClick={() => formik.setStatus({})}
                    aria-label="Close"
                  ></button>
                </div>
              )}

              {/* Login Form */}
              <form onSubmit={formik.handleSubmit} noValidate>
                {/* Email Field */}
                <div className="mb-4">
                  <label htmlFor="email" className="form-label fw-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className={getInputClass('email')}
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  
                  {/* Error message */}
                  {formik.touched.email && formik.errors.email && (
                    <div className="invalid-feedback">
                      {formik.errors.email}
                    </div>
                  )}
                  
                  {/* Success message */}
                  {formik.touched.email && !formik.errors.email && (
                    <div className="valid-feedback">
                      <i className="bi bi-check-circle"></i> Email looks good!
                    </div>
                  )}
                </div>

                {/* Password Field */}
                <div className="mb-4">
                  <label htmlFor="password" className="form-label fw-semibold">
                    Password
                  </label>
                  <input
                    type="password"
                    className={getInputClass('password')}
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  
                  {/* Error message */}
                  {formik.touched.password && formik.errors.password && (
                    <div className="invalid-feedback">
                      {formik.errors.password}
                    </div>
                  )}
                  
                  {/* Success message */}
                  {formik.touched.password && !formik.errors.password && (
                    <div className="valid-feedback">
                      <i className="bi bi-check-circle"></i> Password is valid
                    </div>
                  )}
                  
                  {/* Password strength hint */}
                  {formik.values.password && formik.values.password.length < 6 && (
                    <small className="text-muted">
                      Password must be at least 6 characters
                    </small>
                  )}
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="rememberMe"
                      name="rememberMe"
                      checked={formik.values.rememberMe}
                      onChange={formik.handleChange}
                    />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Remember me
                    </label>
                  </div>
                  <a 
                    href="/forgot-password" 
                    className="text-decoration-none text-primary"
                  >
                    Forgot Password?
                  </a>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn btn-primary w-100 py-2 mb-4"
                  disabled={formik.isSubmitting}
                >
                  {formik.isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" 
                            role="status" 
                            aria-hidden="true">
                      </span>
                      Signing in...
                    </>
                  ) : (
                    'Sign In'
                  )}
                </button>

                {/* Sign Up Link */}
                <div className="text-center">
                  <p className="text-muted mb-0">
                    Don't have an account?{' '}
                    <a href="/signup" className="text-primary fw-bold text-decoration-none">
                      Sign up here
                    </a>
                  </p>
                </div>
              </form>
            </div>
            
            {/* Footer */}
            <div className="card-footer bg-white border-0 text-center py-3">
              <small className="text-muted">
                © 2024 Your Company. All rights reserved.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;