import React from "react";

import './footer.css'

const Footer = () => {
    return(
        <footer className="footer">
            <p className="footer-title-text">FLIGHT PRICE PREDICTION</p>
            
            <hr/>

            <address className="address">
                <p>Gyelpozhing College of Information Technology</p>
                <p>Mail: flightprice@gmail.com</p>
                <p>Call us:  +975   17779982</p>
            </address>
        </footer>
    );
}

export default Footer;
