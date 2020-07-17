import React from 'react';
import { useHistory } from 'react-router-dom';
import LandingPageLatest from "./LandingPageLatest";

const LandingPageAbout = () => {
    const history = useHistory();

    const redirect = () => {
        history.push("/signUp");
    }
    
    return (
        <section className="lp-top">

            <h1>FIND YOUR TRAVEL PARTNERS FOR LIFE. FOR FREE</h1>

            <LandingPageLatest />

			<button onClick={redirect} className="lp-seeMore">See More Trips</button>

		</section>
    )
}

export default LandingPageAbout;