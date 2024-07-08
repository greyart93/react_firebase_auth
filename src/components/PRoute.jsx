import { Navigate } from "react-router-dom";

const PRoute = ({ children, user }) => {
  return user ? children : <Navigate to="/"></Navigate>;
};

export default PRoute;
