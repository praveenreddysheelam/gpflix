import React, { useEffect, useState } from 'react';
import {auth} from '../utils/firebase';
import {signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import {addUser,removeUser} from '../utils/userSlice';
import { LOGO,SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/GptSlice';
import { changeLanguage } from '../utils/configSlice';
const Header = () => {
  const dispatch=useDispatch();
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch);
  const [signedIn,SetSignedIn]=useState(false);
    const navigate=useNavigate()
    const handleSignOut=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/")
          }).catch((error) => {
            // An error happened.
          });
    }
    const handleGptSearch=()=>{
      dispatch(toggleGptSearchView());
    }
    const handleLanguageChange=(e)=>{
      dispatch(changeLanguage(e.target.value));
    }
    useEffect(()=>{
      const unsubscribe= onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const {uid,email,displayName }= user;
            dispatch(addUser({
              uid:uid,
              email:email,
              displayName:displayName,
            }));
            SetSignedIn(true);
            navigate("/browse");       
            // ...
          } else {
            // User is signed out
            // ...
            dispatch(removeUser());
            SetSignedIn(false);
            navigate("/");
          }
        });   
    return ()=> unsubscribe();      
   },[]);
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-44' src={LOGO} alt="logo" />
        {signedIn &&
        <div className='flex p-2'>
          {showGptSearch &&
          <select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLanguageChange}> 
          {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
          </select>
           }
             <button onClick={handleGptSearch} className='py-2 px-4 m-2 bg-purple-800 text-white rounded-lg mx-4'>GPT Search</button>
            <img className='w-12 h-12' alt='user-icon' src=  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"/>
            <button className='font-bold text-white' onClick={handleSignOut}> (Sign Out) </button>
        </div>}
    </div>
  )
}

export default Header