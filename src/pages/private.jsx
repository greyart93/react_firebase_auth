import { signOut } from "firebase/auth";
import { auth } from "../firebase";
const Private = () => {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => console.log("Sign Out"))
      .catch((error) => console.log(error));
  };
  return (
    <section>
      <h2>Private page</h2>
      <button onClick={handleSignOut}>Sign Out</button>
    </section>
  );
};

export default Private;
