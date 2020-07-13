import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../../css/general/navBar.css';

const NavBar = () => {
    const isOnTripsPage = () => window.location.pathname === "/trips";
    const isOnCreateTripsPage = () => window.location.pathname === "/trips/create";


    const displayCreateTrip = () => {
        if(isOnTripsPage() || isOnCreateTripsPage()) {
            return null
        } else {
            return (
                <NavLink to="/trips/create">CREATE A TRIP</NavLink>
            )
        }
    }
    
    return (
        <nav className="mainNav">
            <section className="mainNav-left">
                {/* Logo Here */}
                <h1><Link to="/trips">TRIPHIKERS</Link></h1>
            </section>

            <section className="mainNav-right">
                {displayCreateTrip()}
                <NavLink to="/trips">TRIPS</NavLink>
                {/* When State management is added updated from /user to /user/:userId */}
                <NavLink to="/user">PROFILE</NavLink>
            </section>
        </nav>
    )
}

export default NavBar;