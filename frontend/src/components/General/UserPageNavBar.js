import React, { useContext } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { logout } from '../../util/firebaseFunction';
import { AuthContext } from '../../providers/AuthContext';

const UserPageNavBar = () => {
    const { currentUser } = useContext(AuthContext);
    const location = useLocation();
    const isOnTripsPage = location.pathname === "/trips";
    const isOnCreateTripsPage = location.pathname === "/trips/create";

    const displayCreateTrip = () => {
        if(isOnTripsPage || isOnCreateTripsPage) {
            return null
        } else {
            return (
                <NavLink to="/trips/create">CREATE A TRIP</NavLink>
            )
        }
    }

    const displayUserPageNavBar = () => {
        if(currentUser) {
            return (
                <section className="mainNav-right">
                    {displayCreateTrip()}
                    <NavLink exact to="/trips">TRIPS</NavLink>
                    {/* When State management is added updated from /user to /user/:userId */}
                    <NavLink to="/user">PROFILE</NavLink>
                    <NavLink to="/messages">MESSAGES</NavLink>
                    <a onClick={redirect}>LOG OUT</a>
                </section>
            )
        } else {
            return (
                <section className="lp-navRight">
                    <NavLink exact to="/">ABOUT</NavLink>
                    <NavLink to="/safety">SAFETY</NavLink>
                    <NavLink to="/signUp">CREATE ACCOUNT</NavLink>
                    <NavLink to="/signIn">LOG IN</NavLink>
                </section>
            )
        }
    }

    const redirect = async () => {
        await logout();
    }
    
    return (
        <nav className="mainNav">
            <section className="mainNav-left">
                {/* Logo Here */}
                <h1><Link to={currentUser ? "/trips" : "/"}>TRIPHIKERS</Link></h1>
            </section>

            {displayUserPageNavBar()}
        </nav>
    )
}

export default UserPageNavBar;