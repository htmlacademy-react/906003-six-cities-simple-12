import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute ({authorizationStatus, children}: PrivateRouteProps): JSX.Element {
  return (
    authorizationStatus !== AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Root} />
  );
}

export default PrivateRoute;
