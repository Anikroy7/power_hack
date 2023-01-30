import React, { useState } from "react";
import Layout from "../Layout/Layout";
import Modal from "../Shared/Modal/Modal";
import BillingNavbar from "./BillingNavbar";



const BillingPage = () => {
    const [openModal, setOpenModal] = useState(false);


    return < Layout >
        {/* Body */}
        < BillingNavbar setOpenModal={setOpenModal} />
        {openModal && <Modal />}
    </ Layout>

}

export default BillingPage;
