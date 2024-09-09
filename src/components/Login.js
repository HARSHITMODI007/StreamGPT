import React, { useState, useRef } from "react";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../Utils/firebase";
import {updateProfile } from "firebase/auth";
import Header from "./Header";
import { checkvailddata } from "../Utils/Validate";
import { addUser } from "../Utils/userSlice";
import { useDispatch } from "react-redux";
import { USER_AVATAR } from '../Utils/constants';
const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errormessage, seterrormessage] = useState();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch()



  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };
  const handlebuttonclick = () => {
    let message = checkvailddata(email.current.value, password.current.value);
    // if(!isSignInForm){const message2= checkvailddata(email.current.value, password.current.value,name.current.value)}
    seterrormessage(message);
    console.log(message);
    if (message) return;

    if (!isSignInForm) {
      //sinup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, 
            photoURL:USER_AVATAR
          }).then(() => {
            // Profile updated!
            // then
            //i will dispatch the action so that it updates the user
            const {uid,email,displayName,photoURL} = auth.currentUser;
             dispatch(addUser({
              uid:uid,
              email:email,
              displayName:displayName,
              photoURL:photoURL,
            }))


          }).catch((error) => {
            // An error occurred
            seterrormessage(error.message);
            // ...
          });
          console.log(user);
         

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormessage(errorCode + " " + errorMessage);
          // ..
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(auth,email.current.value, password.current.value)
      .then((userCredential) => {
    // Signed in 
       const user = userCredential.user;
       console.log(user)

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorCode+" "+errorMessage);
  });


    }

    console.log(email.current.value);
    console.log(password.current.value);
    //validate the form data
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_large.jpg"
          alt="bg-image"
        />
      </div>

      <div className="absolute">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-[340px] h-[400px] bg-black my-36  mx-[500px] right-0 left-0 rounded-lg bg-opacity-80 "
        >
          <h1 className="text-3xl font-bold text-white py-4 my-4 mx-4">
            {isSignInForm ? "Sign  In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="FULL NAME"
              className="p-4 m-4 w-[312px] h-[40px] bg-gray-700 rounded-lg"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-4 m-4 w-[312px] h-[40px] bg-gray-700 rounded-lg"
          />
          <input
            ref={password}
            type="password"
            placeholder="PassWord"
            className="p-4 m-4 w-[312px] h-[40px] bg-gray-700 rounded-lg"
          />
          <p className="text-red-500 text-lg font-bold mx-8">{errormessage}</p>
          <button
            className="p-2 m-4 text-white w-[312px] h-[40px] bg-red-600 rounded-lg"
            onClick={handlebuttonclick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="text-white px-10 cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to StreamGPT? Sign Up Now"
              : "Already Registered? Sign In"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
