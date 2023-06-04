import React from "react";
import { Link } from "react-router-dom";
import './about.css'
import { Navbar, Footer} from "../../components";
import Vision from '../../assets/images/vision.png'
import Mission from '../../assets/images/targeting.png'

const About = () => {
    return(
        <div>
            <Navbar />
           
            <section className="hero-banner2">
                <div className="hero2-content">
                    <h1 className="hero-main-text">Why We Exist?</h1>
                    <p className="hero-sub-text">Your journey, made smarter</p>
                    <Link className="btn btn-about" to={'/'}>Predict</Link>
                </div>
            </section>

            <div className="about-section">
                <p className="about-text">About Flight Price Prediction </p>
                <hr/>
                <div className="about">
                    <div className="about-col-1">
                        <p>Welcome to our flight price prediction website! We are a team of data scientists and travel enthusiasts who are passionate about helping people save money on airfare. </p>
                        <br />
                        <img alt="about" className="about-image" width={196} src={Mission} />
                        <h3>Mission</h3>
                        <p>The ultimate mission of flight price prediction is to make air travel more accessible and affordable for everyone. By providing accurate and reliable flight price predictions, we hope to empower travelers to make informed decisions about their travel plans and budgets.</p>
                    </div>

                    <div className="about-col-1">
                        <p>Our mission is to use advanced machine learning algorithms to forecast flight prices, and to provide our users with the information they need to make informed decisions about when to book their flights.</p>
                        <h3>Vission</h3>
                        <p>To create a more transparent and equitable travel market by providing travelers with the tools and information they need to make informed decisions.</p>
                        <img alt="about" className="about-image" width={196} src={Vision} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;
