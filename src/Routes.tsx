import React from "react";
import { Routes as ReactRoutes , Route , Navigate } from 'react-router-dom';
import Users from './views/Users';
import UserDetails from "./views/UserDetails";
import {AuthGuard} from "./guards/auth-guard";
import Login from "./views/Login";
import Contact from "./views/Contact";
import About from "./views/About";

const Routes = (): JSX.Element => {
    return (
        <ReactRoutes>
            <Route
                path="/users"
                element={
                    <AuthGuard><Users /></AuthGuard>
                }
            />
            <Route
                path="/users/:id"
                element={
                    <AuthGuard><UserDetails /></AuthGuard>
                }
            />

            <Route
                path="/login"
                element={<Login />}
            />

            <Route
                path="/"
                element={<Navigate replace to="/users" />} // Redirect to Users page instead of Home page
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </ReactRoutes>
    );
};

export default Routes;



/*const Routes =(): JSX.Element => {
    return (
        <ReactRoutes>
            <Route path ="/users" element ={<Users />} >
            </Route>
            <Route   path="/users/:id" element = {<UserDetails/>}>
            </Route>
            <Route path ="/" element = {<Navigate replace to="/users" />}
            />

        </ReactRoutes>
    );


};
export default Routes ; */