import React from "react";
import Header from "../Header/Header";

const Layout = ({ children, header }) => {
    return <div>
        <main>{children}</main>
    </div>
};

export default Layout;
