import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return(
        <div>
            <nav className='navbar'>
                <ul>
                    <li><Link to ='/registration'>Register</Link></li>

                    <li><Link to ='/login'>Login</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;