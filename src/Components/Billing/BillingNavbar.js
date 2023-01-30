import React from 'react';
import './Billing.css'

const BillingNavbar = () => {
    return (
        <section className='billing_navbar_container'>
            {/* navbar left */}
            <div className='billing_nav_left'>
                <h3>Billings</h3>
                <input type="text" name='search' placeholder='Search' />
            </div>
            {/* navbar right */}
            <div className='billing_nav_right'>
                <button>Add New</button>
            </div>
        </section>
    );
};

export default BillingNavbar;