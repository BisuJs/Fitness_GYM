import React, { useState,useCallback } from 'react'

const FormComponent = (WrappedComponent) => {
  const FormComponent= (props)=>{
    const [formData,setFormData]=useState({});
  const [errors,setErrors]=useState({});
  const validate=(name,value)=>{
    return value?"":`${name} is required.`
  }
    const handleChange=useCallback((event)=>{
        const {name,value}=event.target;
        const newFormData={...formData,[name]:value};
        const newErrors={...errors,[name]:validate(name,value)}
        setFormData(newFormData);
        setErrors(newErrors);
    },[validate])
    
    const handleSubmit=useCallback(()=>{
        if(props.onSubmit){
          props.onSubmit(formData)
        }
        return formData;
    },[formData,props]) 
    return <WrappedComponent
    {...props}
    handleChange={handleChange}
    formData={formData}
    errors={errors}
    handleSubmit={handleSubmit}
    ></WrappedComponent>  
  }
  
return FormComponent;
}

export default FormComponent;