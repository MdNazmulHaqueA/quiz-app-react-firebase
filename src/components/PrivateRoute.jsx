/* eslint-disable react/prop-types */
// import { Redirect, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';

export default function PrivateRoute({ element: Component, ...rest }) {
  const { currentUser } = useAuth();

  return currentUser ? (
    
      // <Route {...rest}>{props => <Component {...props} />}</Route>
      
      <Component {...rest} />
      
    
  ) : (
    // <Redirect to="/login" />
    <Navigate to="/login" replace />
  );
}
