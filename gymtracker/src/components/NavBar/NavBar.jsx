import React from 'react';
import { Link } from 'react-router-dom';
// import './NavBar.css'

const NavBar = ({user}) => {
    return(


        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container-fluid'>
                    <ul>
                        <li className='navbar-brand'><Link to ='/' >Home</Link></li>

                        <li className='nav-item'> <Link to = '/getting_started'>Getting Started</Link> </li>

                        {!user &&
                            <React.Fragment>
                                <li className='nav-item'>
                                    <Link to ='/login'>Login</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to ='/registration'>Register</Link>
                                </li>
                            </React.Fragment>
                        }
                        {user && 
                        <React.Fragment>

                        <li className='nav-item'><Link to ='/add_exercises'>Add Your Exercises</Link></li>
                        <li className='nav-item'><Link to ='/display_exercises'>Track Your Exercises</Link></li>

                        <li className='nav-item'> <Link to = '/add_food'>Add your Meals</Link> </li>
                        <li className='nav-item'> <Link to = '/display_foods'>Track your Meals</Link> </li>

                        <li className='nav-item'> <Link to = '/add_misc'>Add Misc Fields</Link> </li>
                        <li className='nav-item'> <Link to = '/display_misc'>Track Misc Fields</Link> </li>

                            <li className='nav-item'> 
                                <Link to = '/logout'>Logout</Link>
                            </li>
                        </React.Fragment>
                        }

                    </ul>
            </div>
        </nav>
    )
}

export default NavBar;