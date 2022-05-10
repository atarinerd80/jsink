import React from "react";
import Map from "../components/Map";

export class Contact extends React.Component {
    render() {
        return (
            <>
                <section id="contact-us" className="contact-us section-bg">
                    <div className="container">
                        <div className="row">
                            <div className="title text-center wow fadeIn">
                                <h2>Get In <span className="color">Touch</span></h2>
                                <div className="border"></div>
                            </div>
                            <div className="contact-info col-lg-6 wow fadeInUp center">
                                <h3>Contact Details</h3>
                                <h6>Address</h6>
                                <span>945 N Main St, Monticello, KY 42633</span><br /><br />
                                <h6>Phone Number</h6>
                                <span><a href="teL:6063076327">(606) 307-6327</a></span><br /><br />
                                <h6>Facebook</h6>
                                <span><a href="https://www.facebook.com/jason.slagle.967" target="_blank">Jason Slagle</a></span><br /><br />
                                <h6>Instagram</h6>
                                <span><a href="https://www.instagram.com/jsink_/?hl=en" target="_blank">JS Ink</a></span><br /><br />
                            </div>
                            <div className="col-lg-6 map-container">
                                <Map />
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
export default Contact;