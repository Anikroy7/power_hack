import React, { useState } from 'react';
import './Billing.css'
import BillingTable from './BillingTable';

const BillingNavbar = ({ setOpenModal }) => {

    return (
        <section clas>
            <section className='billing_navbar_container'>
                {/* navbar left */}
                <div className='billing_nav_left'>
                    <h3>Billings</h3>
                    <input type="text" name='search' placeholder='Search' />
                </div>
                {/* navbar right */}
                <div className='billing_nav_right'>
                    {/* The button to open modal */}
                    <label onClick={() => setOpenModal(true)} htmlFor="billingModal" className="bg-green-400 rounded p-3">Add New +</label>
                </div>
            </section>

            {/* Billing Tabel */}
            <BillingTable />
        </section>
    );
};

export default BillingNavbar;