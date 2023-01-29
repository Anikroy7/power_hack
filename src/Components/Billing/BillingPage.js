import React from "react";
import Header from "../Header/Header";
import Layout from "../Layout/Layout";
import BillingNavbar from "./BillingNavbar";


const BillingPage = () => {
    return (
        <Layout>
            {/* This is our header */}
            <Header />

            {/* Body */}
            <BillingNavbar />
        </Layout>
    );
};

export default BillingPage;
