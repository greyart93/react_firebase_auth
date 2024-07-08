import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { Navigate } from "react-router-dom";

const Home = ({ user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUpActive, setIsSignUpActive] = useState(false);
  const handleChange = () => {
    setIsSignUpActive(!isSignUpActive);
  };

  const handleSignUp = () => {
    if (!email || !password) return;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleSignIn = () => {
    if (!email || !password) return;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  if (user) {
    return <Navigate to="/private"></Navigate>;
  }

  return (
    <section>
      <h2>Home page</h2>
      <form>
        {isSignUpActive && <legend>Sign Up</legend>}
        {!isSignUpActive && <legend>Sign In</legend>}

        <fieldset>
          <ul>
            <li>
              <label htmlFor="email">Email</label>
              <input type="text" id="email" onChange={handleEmailChange} />
            </li>
            <li>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="pasword"
                onChange={handlePasswordChange}
              />
            </li>
          </ul>
          {isSignUpActive && (
            <button type="button" onClick={handleSignUp}>
              Sign Up
            </button>
          )}
          {!isSignUpActive && (
            <button type="button" onClick={handleSignIn}>
              Sign In
            </button>
          )}
        </fieldset>
        {isSignUpActive && <a onClick={handleChange}>Log In</a>}
        {!isSignUpActive && <a onClick={handleChange}>Create an account</a>}
      </form>
    </section>
  );
};

export default Home;
