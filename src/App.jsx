import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Private from "./pages/private";
import PrivatePage from "./pages/PrivatePage";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
// import ProtectedRoute from "./components/ProtectedRoute";
import PRoute from "./components/PRoute";
import { auth } from "./firebase";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsFetching(false);
        return;
      }
      setUser(null);
      setIsFetching(false);
    });
    return () => unsubscribe();
  }, []);

  if (isFetching) {
    return <h2>Loading...</h2>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home user={user}></Home>}></Route>
        <Route
          path="/private"
          element={
            <PRoute user={user}>
              <PrivatePage></PrivatePage>
            </PRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
