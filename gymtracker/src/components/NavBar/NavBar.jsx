import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = ({user}) => {
    return(


        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container-fluid'>
                    <div>
                        <div className='navbar-brand'><Link to ='/' >Home</Link></div>

                        <div className='nav-item'> <Link to = '/getting_started'>Getting Started</Link> </div>

                        {!user &&
                            <React.Fragment>
                                <div className='nav-item'>
                                    <Link to ='/login'>Login</Link>
                                </div>
                                <div className='nav-item'>
                                    <Link to ='/registration'>Register</Link>
                                </div>
                            </React.Fragment>
                        }
                        {user && 
                        <React.Fragment>

                        <div className='nav-item'><Link to ='/add_exercises'>Add Your Exercises</Link></div>
                        <div className='nav-item'><Link to ='/display_exercises'>Track Your Exercises</Link></div>

                        <div className='nav-item'> <Link to = '/add_food'>Add your Meals</Link> </div>
                        <div className='nav-item'> <Link to = '/display_foods'>Track your Meals</Link> </div>

                        <div className='nav-item'> <Link to = '/add_misc'>Add Misc Fields</Link> </div>
                        <div className='nav-item'> <Link to = '/display_misc'>Track Misc Fields</Link> </div>

                            <div className='nav-item'> 
                                <Link to = '/logout'>Logout</Link>
                            </div>
                        </React.Fragment>
                        }

                    </div>
            </div>
        </nav>
    )
}

export default NavBar;