import React from 'react'
import Header from './Header'
import {useState,useRef} from 'react'
import {checkValidData} from '../utils/validate'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile  } from "firebase/auth";
import {auth} from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
const Login = () => {
  const [isSignIn,setSignIn]=useState(true);
  const [errorMsg,setErrorMsg]=useState(null);
  const email=useRef(null);
  const password=useRef(null);
  const name=useRef(null);
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const toggleForm=()=>{
     setSignIn(!isSignIn);
  }
  const handleClick = ()=> {
    const message=checkValidData(email.current.value,password.current.value);
    setErrorMsg(message);
    if(message) return;
    if(!isSignIn){
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    updateProfile(user, {
        displayName: name.current.value,
      }).then(() => {
        // Profile updated!
        const {uid,email,displayName }= auth.currentUser;
              dispatch(addUser({
                uid:uid,
                email:email,
                displayName:displayName,
              }));
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMsg(errorCode+" - "+ errorMessage);
    // ..
  });
    }
    else{
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode+"-"+errorMessage);
        });
    }
  }
  return (
    <div >
        <Header />
        <div className='absolute'>
            <img  src='https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='bgimage' />
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className='w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
            <h1 className='font-bold text-white text-3xl py-4'>{isSignIn?"Sign In":"Sign Up"}</h1>
            <input type='text' ref={email} placeholder='Email Address ' className='bg-gray-700 p-4 my-4 w-full  rounded-lg' />
            {!isSignIn && <input type='text' ref={name} placeholder='Full Name ' className='p-4 my-4 w-full bg-gray-700  rounded-lg' />}
            <input type='password' ref={password} placeholder='Password' className='p-4 my-4 w-full bg-gray-700  rounded-lg' />
            <p className='text-red-500 font-bold text-lg py-2'>{errorMsg}</p>
            <button className='w-full p-4 my-4 bg-red-700' onClick={handleClick}>{isSignIn?"Sign In":"Sign Up"} </button>
            <p className='py-4 cursor-pointer' onClick={toggleForm}>{isSignIn?"New to Netflix? Sign Up Now":"Already a User? Sign In "} </p>
        </form>
    </div>
  )
}

export default Login;