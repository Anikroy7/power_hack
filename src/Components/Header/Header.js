import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='navbar_container'>
            {/* nav left */}
            <div>
                <h3>Power Hack</h3>
            </div>
            {/* nav right */}
            <div>
                <h4>Paid Total: 0</h4>
            </div>
        </nav>
    );
};

export default Header;