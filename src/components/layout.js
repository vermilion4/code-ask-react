import { Outlet } from "react-router-dom";
import React from "react";

export const Layout = () =>{
    return (
        <main className="App">                           
        <Outlet/>
        </main>
    )
}