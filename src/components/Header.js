import React from 'react'
import logo from "../Utils/logo.webp"
import {onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import { auth } from '../Utils/firebase'; 
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {addUser,removeUser} from '../Utils/userSlice'
import { toggleGptSearchView } from '../Utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../Utils/constants';
import { changeLanguage } from '../Utils/configSlice';


const Header = () => {
  const dispatch =useDispatch()
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  
  const handlesignOut =()=>{
    
    signOut(auth).then(() => {
    // Sign-out successful.

    }).catch((error) => {
     // An error happened.
    });

  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({
          uid:uid,
          email:email,
          displayName:displayName,
          photoURL:photoURL,
        }))
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser( ))
        navigate("/");
    
        // ...
      }
    });
    return() => {unsubscribe();}
  },[])     

  const handleGptSearchClick = () => {
    //toggle gpt search
    dispatch(toggleGptSearchView());

  }
const handlelanguagechange = (e)=>{
 dispatch(changeLanguage(e.target.value));

}
const showGptSearch = useSelector(store => store.gpt.showGptSearch)

  return (
    <div className='bg-black-600 absolute px-8 py-2 bg-gradient-to-b from-black bg-opacity-10 z-10 w-screen flex justify-between items-center'>
      <img src={logo} alt="StreamGPT Logo" style={{ width: '150px', height: '100px' }} />
    { user && (<div className='flex'>
  { showGptSearch && (<select className='text-white py-2 px-4 mx-4 my-6  relative top-[-20px] bg-gray-800 rounded-lg bg-opacity-10' onChange={handlelanguagechange}>
          {SUPPORTED_LANGUAGES.map((lang) => (<option key={lang.identifier} value ={lang.identifier}>{lang.name}</option>))}
        </select>)}
        <button className='text-white py-2 px-4 mx-4 my-6  relative top-[-20px] bg-blue-800 rounded-lg' onClick={handleGptSearchClick} >{showGptSearch ?"HomePage":"Gpt Search"}</button>
        <div className='items-center justify-center'>
        <img
        className='w-[50px] h-[50px] mx-2'
        alt="usericon"
        src ={user.photoURL}/>
        <button className='text-white mr-4 mt-1' onClick={handlesignOut}>(SignOut)</button>
        </div>
      </div>)}
  
    </div>)
  
}

export default Header
