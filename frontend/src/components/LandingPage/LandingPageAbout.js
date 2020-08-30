import React from 'react';
import '../../css/landingPage/landingPageAbout.css';
import LandingPageSearch from './LandingPageSearch';

const LandingPageAbout = ({ redirect }) => {
    return (
        <section className="lp-about">

            <h1>FIND YOUR TRAVEL PARTNERS FOR LIFE. FOR FREE</h1>

            <LandingPageSearch/>

			<button onClick={redirect} className="lp-orange">Create Your Trip</button>

		</section>
    )
}

export default LandingPageAbout;