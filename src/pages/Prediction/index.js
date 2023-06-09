import React from "react";

import './index.css'
import { Footer, Navbar, WhySection } from "../../components";

import transferIcon from '../../assets/images/transfer.png';
import displayImage from '../../assets/images/prediction.jpeg'
import { useLocation } from "react-router-dom";

const ResultForm = ({data}) => {
    return (
        <form className="result-form flex flex-column">
            <div className="prediction-result-container">
                <div className="prediction-result-container-right">
                    <p className="prediction-result-container-right-text">PREDICTED PRICE IN DOLLAR: $ {data.predicted_price_in_dollar}</p>
                </div>
                <div className="prediction-result-container-right">
                    <p className="prediction-result-container-right-text">PREDICTED PRICE IN NGULTRUM: Nu {data.predicted_price_in_ngultrum}</p>
                </div>
            </div>

            <div className="radio-input">
                <input value="true" type="radio" name="oneway" /> <p>One Way</p>
            </div>

            <div className="flex flex-column">
                <input placeholder={"Airline: "+ data.Airline} />

                <div className="to-from-container flex flex-row justify-space-between">
                    <input disabled placeholder={"Source: " + data.Source}/>
                    <img className="transfer-icon" height={30} src={transferIcon} alt="transfer"/> 
                    <input disabled placeholder={"Dest: " + data.Destination}/>
                </div>
                <input disabled placeholder={"Duration: " + data.Duration_minutes +" Minutes"} />
                <input disabled placeholder={"Total Stops: " + data.Total_Stops} />
            </div>
        </form>
    );
}


const Prediction = () => {
    const location = useLocation();
    const formData = location.state.formData;

    return (
        <div>
            <Navbar />

            <section>
                <div className="grid col-2 row-1">
                    <div className="prediction-left-content flex flex-column align-flex-start">
                        <h1 className="prediction-text">Fly Smarter with Us</h1>
                        <p className="prediction-subtext">Accurate Flight Predictions for Smart Travelers</p>
                     
                        <img alt="display-pic" className="image-item" src={displayImage} />
                    </div>

                    <ResultForm data={formData}/>
                </div>
            </section>

            <WhySection
                title={"Travel smart, save big: Discover the world with us."}
            />
            <Footer />
        </div>
    );
}

export default Prediction;