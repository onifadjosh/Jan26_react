import { useFormik } from 'formik'
import React from 'react'
import * as yup from "yup"

const Formikk = () => {
    let formik = useFormik({
        initialValues:{
            firstName:"",
            lastName:"",
            email:"",
            password:""
        },

        onSubmit:()=>{
            console.log(formik.values);
            
        },

        validationSchema:yup.object({
            firstName: yup.string().required("First name is required"),
            // lastName:
        })

    })
    // console.log(formik.values);
    
  return (
    <div>
        <input type="text" placeholder='first name' name='firstName'  onChange={formik.handleChange}/>
        <input type="text" placeholder='last name' name='lastName'  onChange={formik.handleChange}/>
        <input type="email" placeholder='email' name='email'  onChange={formik.handleChange}/>
        <input type="text" placeholder='password' name='password'  onChange={formik.handleChange}/>


        <button type='Submit' onClick={formik.handleSubmit}>Submit</button>
    </div>
  )
}

export default Formikk