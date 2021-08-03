import React from 'react';
import {Route} from "react-router-dom";
import NotFound from "./NotFound";

const PrivateAdminPages = (props) => {
    return localStorage.getItem("login") ?
        <Route path={props.path} exact={props.exact} component={props.component}/> :
        <Route component={NotFound}/>
};

export default PrivateAdminPages;