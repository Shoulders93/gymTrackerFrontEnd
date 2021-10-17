import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = ({user}) => {
    return(


        <nav className=''>
            <div className=''>
                    <ul>
                        <li className='navigation'><Link to ='/' >Home</Link></li>

                        <li className='navigation'> <Link to = '/getting_started'>Getting Started</Link> </li>

                        {!user &&
                            <React.Fragment>
                                <li className='navigation'>
                                    <Link to ='/login'>Login</Link>
                                </li>
                                <li className='navigation'>
                                    <Link to ='/registration'>Register</Link>
                                </li>
                            </React.Fragment>
                        }
                        {user && 
                        <React.Fragment>

                        <li className='navigation'><Link to ='/add_exercises'>Add Your Exercises</Link></li>
                        <li className='navigation'><Link to ='/display_exercises'>Track Your Exercises</Link></li>

                        <li className='navigation'> <Link to = '/add_food'>Add your Meals</Link> </li>
                        <li className='navigation'> <Link to = '/display_foods'>Track your Meals</Link> </li>

                        <li className='navigation'> <Link to = '/add_misc'>Add Misc Fields</Link> </li>
                        <li className='navigation'> <Link to = '/display_misc'>Track Misc Fields</Link> </li>

                        <li className='navigation'> <Link to = '/logout'>Logout</Link></li>
                        
                        </React.Fragment>
                        }

                    </ul>
            </div>
        </nav>
    )
}

export default NavBar;