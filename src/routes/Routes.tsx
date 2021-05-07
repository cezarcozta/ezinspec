import React from "react";
import {
  Redirect,
  Route as ReactDomRoute,
  RouteProps as ReactDOMRoutesProps,
} from "react-router-dom";
import { useAuth } from "../contexts/Auth";

interface RouteProps extends ReactDOMRoutesProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}
const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { jwt_access } = useAuth();

  return (
    <ReactDomRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!jwt_access ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? "/" : "/dashboard",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
