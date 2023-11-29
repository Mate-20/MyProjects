import React from 'react'
import { MdLibraryAdd } from "react-icons/md";
import { MdOutlineEvent } from "react-icons/md";
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'
const Navbar = () => {
    return (
        <div>
        <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid">
                <Link to="/" className={styles.navbarbrand}>TheEventsCO</Link>
                <div className="d-flex">
                    <Link to="/AddEvent" className='btn btn-light me-3'><MdLibraryAdd /> Add Event</Link>
                    <Link to="/" className='btn btn-light'><MdOutlineEvent /> Upcoming Events</Link>
                </div>
            </div>
        </nav>
    </div>
    )
}

export default Navbar