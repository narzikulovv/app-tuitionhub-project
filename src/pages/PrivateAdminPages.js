import React from "react";
import { Route, Redirect } from "react-router-dom";

import {config} from "../utils/config";

const PrivateAdminPages = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem(config.TOKEN);
  return (
    <Route
      {...rest}
      render={(props) => {
        return token ? <Component {...props} /> : <Redirect to="/404" />;
      }}
    />
  );
};

export default PrivateAdminPages;
