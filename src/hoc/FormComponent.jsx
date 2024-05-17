import React, { useState } from 'react'

const FormComponent = (WrappedComponent) => {
  return function (props){
    const [formData,setFormData]=useState({});
    const [errors,setErrors]=useState({});
    const handleChange=(event)=>{
        const {name,value}=event.target;
        const newFormData={...formData,[name]:value};
        const newErrors={...errors,[name]:validate(name,value)}
        setFormData(newFormData);
        setErrors(newErrors)
    }
    const validate=(name,value)=>{
        return value?"":`${name} is required.`
      }
    const handleSubmit=()=>{
        console.log(formData,'submitting the form !')
    }  
    return <WrappedComponent
    {...props}
    handleChange={handleChange}
    formData={formData}
    errors={errors}
    handleSubmit={handleSubmit}
    ></WrappedComponent>  
  }
  

}

export default FormComponent