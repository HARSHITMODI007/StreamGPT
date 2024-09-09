import React from 'react'
import logo from "../Utils/logo.webp"
import {onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import { auth } from '../Utils/firebase'; 
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {addUser,removeUser} from '../Utils/userSlice'

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
  
  return (
    <div className='bg-black-600 absolute px-8 py-2 bg-gradient-to-b from-black bg-opacity-10 z-10 w-screen flex justify-between items-center'>
      <img src={logo} alt="StreamGPT Logo" style={{ width: '150px', height: '100px' }} />
    { user && (<div className='items-center justify-center'>
        <img
        className='w-[50px] h-[50px] mx-2'
        alt="usericon"
        src ={user.photoURL}/>
        <button className='text-white mr-4' onClick={handlesignOut}>(SignOut)</button>
      </div>)}
  
    </div>)
  
}

export default Header
