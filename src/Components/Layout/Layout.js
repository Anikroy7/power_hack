import React from "react";
import Header from "../Header/Header";

const Layout = ({ body }) => {
    console.log(body);
    return <div>
        <Header />
        <main>{body}</main>
    </div>
};

export default Layout;
