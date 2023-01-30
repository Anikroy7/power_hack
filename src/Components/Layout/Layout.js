import React from "react";
import Header from "../Header/Header";

const Layout = ({ children }) => {
    return <div>
        {/* This is our header */}
        <Header />
        <main>{children}</main>
    </div>
};

export default Layout;
