/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function PublicRoute({ element: Component, ...rest }) {
  const { currentUser } = useAuth();

    return !currentUser ? (
      // <Route {...rest}>{props => <Component {...props} />}</Route>
      <Component {...rest} />
    ) : (
      //  <Redirect to="/" />
      <Navigate to="/" replace />
    );
    
}
