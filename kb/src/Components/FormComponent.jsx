import React, { useEffect } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import logo from '/src/assets/Logo.png'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'
import '../index.css'
import SuccessPage from './SuccessPage'
 
function FormComponent() {
  // Setting states
  const {register, handleSubmit, formState: { errors }, getValues } = useForm()
  const [Submit, setSubmit] = useState(false)
  const [save, setSave] = useState([])

  // using useNavigate Hook
  const navigate = useNavigate()

  const onSubmit= (data) => {
    setSave(data)
    setSubmit(true)
  } 
  useEffect(()=>{
    console.log(save)
    if(Submit){
      navigate('/success')
    }
  },[save,navigate])

  return (<>
  {/* NavBar section */}
  <nav className='BackLibrary' style={{display:"flex", justifyContent:"space-between", boxShadow:"0 0 15px 0;", height:"80px"}}>
    <div>
      <img src={logo} style={{height:"50px", marginLeft: "16px"}} className='nxt'/>
      <span className='Logo'>Kalvium Books</span>
    </div>
  <Link to="/"><button className="bcBtn">Back to Library</button></Link>
  </nav>

   <div className='container'>

    <div className='form'>
      <h1 className='heading'>Registration Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>

        {/* First Name */}
        <input type="text" placeholder='Enter Your First Name' {...register("firstName",{required:"Enter First Name",
        minLength:{value:3, message:"Username must be more than 3 characters"},
        maxLength:{value:30, message:"Username cannot be more than 30 characters"}})}/><br/>
        <span className='span'>{errors.firstName?.message}</span><br/>

        {/* Last Name */}
        <input type="text" placeholder='Enter Your Last Name' {...register("lastName",{required:"Enter Last Name"})}/><br/>
        <span className='span'>{errors.lastName?.message}</span><br/>

        {/* Email */}
        <input type="email" placeholder='Enter Your Email' {...register("email",{required:"Enter Email  ", pattern:{value:/^\S+@\S+$/i, message:"Invalid email"}})}/><br/>
        <span className='span'>{errors.email?.message}</span><br/>

        {/* Password */}
        <input type="password" placeholder='Enter Your Password' {...register("password", {required:"Password is required",
        minLength:{value:10, message:"Password must be more than 10 characters"},
        maxLength:{value:20, message:"Password cannot be more than 20 characters"},
        pattern: { value:/^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])[\w!@#$%^&*()_+{}\[\]:;<>,.?~\\-]{8,}$/, message: 'Password must contain at least one special character',}})}/><br/>
        <span className='span'>{errors.password?.message}</span><br/>

        {/* Password Comfiramtion */}
        <input type="password" placeholder='Enter Password Again' {...register("passwordConfirmation", {required:"Password confirmation required",
        validate: (value) => value === getValues("password") || "Passwords do not match"})} /><br/>
        <span className='span'>{errors.passwordConfirmation?.message}</span><br/>  

        {/* Submit Button */}
        <button className='sbtn' type='submit'>Sign Up</button>

      </form>
    </div>

   </div>
   </> 
  )

}
export default FormComponent