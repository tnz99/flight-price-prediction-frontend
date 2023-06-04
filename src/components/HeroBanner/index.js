import React from "react";

import './hero-banner.css'

const Hero = (props) => {
    return (
        <section className="hero-banner">
            <div className="hero-content">
               {props.children}
            </div>
        </section>
    );
}

export default Hero;
