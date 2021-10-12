import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({user}) => {
    return(
        <div>
            {user && <h4> Welcome {user.username} </h4>}
            <nav className='navbar'>
                <ul>
                    <li><Link to ='/' >Home</Link></li>

                    {/* <li><Link to ='/registration'>Register</Link></li>

                    <li><Link to ='/login'>Login</Link></li> */}
                    
                    <li> <Link to = '/getting_started'>Getting Started</Link> </li>

                    <li><Link to ='/exercises'>Track Your Exercises</Link></li>

                    <li> <Link to = '/foods'>Track your Meals</Link> </li>
                    {!user &&
                        <React.Fragment>
                            <li>
                                <Link to ='/login'>Login</Link>
                            </li>
                            <li>
                                <Link to ='/registration'>Register</Link>
                            </li>
                        </React.Fragment>
                    }
                    {user && 
                    <React.Fragment>
                        <li>
                            <Link to = '/logout'>Logout</Link>
                        </li>
                    </React.Fragment>
                    }

                </ul>
            </nav>
        </div>
    )
}

export default NavBar;