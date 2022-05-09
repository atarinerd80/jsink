import React from "react";

export class Contact extends React.Component {
    render() {
        return (
            <>
                <section id="contact-us" className="contact-us section-bg">
                    <div className="container">
                        <div className="row">
                        <div className="title text-center wow fadeIn" data-wow-duration="500ms">
                            <h2>Get In <span className="color">Touch</span></h2>
                            <div className="border"></div>
                        </div>
                        <div className="contact-info col-md-6 wow fadeInUp" data-wow-duration="500ms">
                            <h3>Contact Details</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, vero, provident, eum eligendi blanditiis ex explicabo vitae nostrum facilis asperiores dolorem illo officiis ratione vel fugiat dicta laboriosam labore adipisci.</p>
                            <div className="contact-details">
                            <div className="con-info clearfix">
                                <i className="tf-map-pin"></i>
                                <span>Khaja Road, Bayzid, Chittagong, Bangladesh</span>
                            </div>
                            <div className="con-info clearfix">
                                <i className="tf-ion-ios-telephone-outline"></i>
                                <span>Phone: +880-31-000-000</span>
                            </div>
                            <div className="con-info clearfix">
                                <i className="tf-ion-iphone"></i>
                                <span>Fax: +880-31-000-000</span>
                            </div>
                            <div className="con-info clearfix">
                                <i className="tf-ion-ios-email-outline"></i>
                                <span>Email: hello@meghna.com</span>
                            </div>
                            </div>
                        </div>
                        <div className="contact-form col-md-6 wow fadeInUp" data-wow-duration="500ms" data-wow-delay="300ms">
                            <form id="contact-form" method="post" action="sendmail.php" role="form">
                            <div className="form-group">
                                <input type="text" placeholder="Your Name" className="form-control" name="name" id="name" />
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Your Email" className="form-control" name="email" id="email" />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Subject" className="form-control" name="subject" id="subject" />
                            </div>
                            <div className="form-group">
                                <textarea rows="6" placeholder="Message" className="form-control" name="message" id="message"></textarea>	
                            </div>
                            <div id="mail-success" className="success">
                                Thank you. The Mailman is on His Way
                            </div>
                            <div id="mail-fail" className="error">
                                Sorry, don't know what happened. Try later
                            </div>
                            <div id="cf-submit">
                                <input type="submit" id="contact-submit" className="btn btn-transparent" value="Submit" />
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    <div className="google-map">
                        <div id="map-canvas"></div>
                    </div>
                </section>
            </>
        );
    }
}
export default Contact;