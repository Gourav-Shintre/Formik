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
            errors.channel="Required"
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
  console.log(formik.touched,"visited fields");

  return (
    <div>
      <form onSubmit={formik.handleSubmit} action="">
        <div>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
        />
{(formik.touched.name && formik.errors.name )&& <p className="error">{formik.errors.name}</p>}
        </div>
        <div>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
{(formik.touched.email && formik.errors.email ) && <p className="error">{formik.errors.email}</p>}
        </div>
        <div>

        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          name="channel"
          onChange={formik.handleChange}
          value={formik.values.channel}
          onBlur={formik.handleBlur}
        />
        {(formik.touched.channel && formik.errors.channel ) && <p className="error">{formik.errors.channel}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default YouTubeForm;
