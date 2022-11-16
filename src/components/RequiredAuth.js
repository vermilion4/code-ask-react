import { useLocation, Navigate, Outlet } from "react-router-dom";
import React from "react";
import { useAuth } from "./hooks/useAuth";

 export const RequiredAuth = ()=>{
    const {auth} =useAuth();
    const location = useLocation();

    return (
    auth.user
    ?<Outlet/> : 
    <Navigate to="/sign-up" state={{from: location}}  replace/>

    )
}