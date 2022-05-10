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
                                <span>945 N Main St, Monticello, KY 42633</span><br />
                                <span>Phone: <a href="teL:6063076327">(606) 307-6327</a></span><br />
                                <span>Facebook: <a href="https://www.facebook.com/jason.slagle.967" target="_blank">Jason Slagle</a></span><br />
                                <span>Instagram: <a href="https://www.instagram.com/jsink_/?hl=en" target="_blank">JS Ink</a></span>
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