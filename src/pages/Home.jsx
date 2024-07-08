import { useState } from "react";

const Home = () => {
  const [isSignUpActive, setIsSignUpActive] = useState(false);
  const handleChange = () => {
    setIsSignUpActive(!isSignUpActive);
  };

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
              <input type="text" id="email" />
            </li>
            <li>
              <label htmlFor="password">Password</label>
              <input type="password" id="pasword" />
            </li>
          </ul>
          {isSignUpActive && <button type="button">Sign Up</button>}
          {!isSignUpActive && <button type="button">Sign In</button>}
        </fieldset>
        {isSignUpActive && <a onClick={handleChange}>Log In</a>}
        {!isSignUpActive && <a onClick={handleChange}>Create an account</a>}
      </form>
    </section>
  );
};

export default Home;
