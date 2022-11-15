import React, { useEffect } from "react";
import auth from "../firebase.config";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const About = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  // title name
  useEffect(() => {
    document.title = "About Us - Zanjira";
  }, []);
  console.log(user);
  return (
    <div className="min-h-screen">
      <h2>About Us</h2>
      <button onClick={() => signInWithGoogle()} className="btn btn-warning">
        sign up with google
      </button>
      <p>Name: {user?.user?.displayName}</p>
    </div>
  );
};

export default About;
