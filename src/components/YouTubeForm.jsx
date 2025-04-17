import React from "react";
import { useFormik } from "formik";
const YouTubeForm = () => {
    const onSubmit=(values)=>{
        console.log(values);  
    }

    const validate =(values)=>{
        let errors={
          
        }
        if(!values.name){
            errors.name="Required"
        }
        if(!values.email){
            errors.email="Required"
        }
        if(!values.channel){
            errors.email="Required"
        }

        return errors

    }
  const formik = useFormik({
    initialValues:{
        name : "",
        email : "",
        channel:""
    },
    onSubmit:onSubmit,
    validate:validate
  });
  console.log(formik.values);

  return (
    <div>
      <form onSubmit={formik.handleSubmit} action="">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />

        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          name="channel"
          onChange={formik.handleChange}
          value={formik.values.channel}
          onBlur={formik.handleBlur}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default YouTubeForm;
