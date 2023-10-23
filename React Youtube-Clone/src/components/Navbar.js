import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar border-body" >
                <div className="d-flex align-items-center">
                    <Link to="/">
                    <i className="bi bi-youtube ms-3"></i>
                    </Link>
                    <h3 className='heading mb-0 ms-2'>YouTube Clone</h3>
                    <SearchBar/>
                </div>
                
            </nav>
        </div>
    )
}


export default Navbar