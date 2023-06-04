import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { Footer, Navbar } from '../../components' 

import './contact.css'

const Contact = () => {
    const [formState, setFormState] = useState({
      from_name: '',
      user_email: '',
      message: ''
    });

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_vgbvpf5', 'template_t4efz0o', form.current, '5O8GJVmptZYl7qSKe')
                .then((result) => {
                    console.log(result.text);
                    setFormState((prevState) => ({
                        ...prevState,
                        from_name: '',
                        user_email: '',
                        message: ''
                    }));
                }, (error) => {
                    console.log(error.text);
                });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    return(
        <div>
            <Navbar />

            <section className="contact-hero-banner">
                <div className="contact-hero-content">
                    <h1 className="hero-main-text">Contact Us</h1>
                </div>
            </section>

            <section className="contactus-section">
                <h1 className="contact-header-text">Let’s start a conversation</h1>
                
                <div className="contact-us-content">
                    
                    <div className="contact-us-content-left">
                        <h2 className="contactus-title">Ask us how we can help you</h2>
                        <p className="contactus-para">
                            If you're not sure where to start, just ask! Our friendly and <br />
                            knowledgeable team is always ready to answer your questions <br />
                            and help you plan your next adventure. No matter what your <br />
                            travel needs are, we're here to help you make them a reality.
                        </p>

                        <p className="contactus-para">
                            So go ahead, ask us how we can help you today. We're here to<br />
                            make your travel dreams come true, and we can't wait to hear<br />
                            from you!
                        </p>
                    </div>

                    <div className="contact-us-content-right">
                        <form ref={form} className="contact-us-form" onSubmit={sendEmail}>
                            <div className="contactus-form-text">
                                <p>Please note that all fields are required</p>
                            </div>

                            <div className="contactus-form-control">
                                <label>Full Name</label>
                                <input name="from_name" type="text" className="contactus-input" onChange={handleChange} value={formState.from_name}/>
                            </div>

                            <div className="contactus-form-control">
                                <label>Email</label>
                                <input name="user_email" type="email" className="contactus-input" onChange={handleChange} value={formState.user_email}/>
                            </div>

                            <div className="contactus-form-control">
                                <label>Message</label>
                                <textarea name='message' className="contactus-textarea" placeholder="your message goes here..." onChange={handleChange} value={formState.message}/>
                            </div>
                        
                            <button className="contactus-btn contactus-btn-text " type="submit" value="send">contact</button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Contact;
