import React from "react";

export class Services extends React.Component {
    render() {
        return (
            <>
                <section id="services" className="bg-one section">
                    <div className="container">
                        <div className="row">
                        <div className="title text-center wow fadeIn" data-wow-duration="500ms">
                            <h2>Our <span className="color">Services</span></h2>
                            <div className="border"></div>
                        </div>
                        <article className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="500ms">
                            <div className="service-block text-center">
                            <div className="service-icon text-center">
                                <i className="tf-globe"></i>
                            </div>
                            <h3>WordPress Theme</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id tellus. Nullam iaculis arcu at mauris dapibus consectetur.</p>
                            </div>
                        </article>
                        <article className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="500ms" data-wow-delay="200ms">
                            <div className="service-block text-center">
                            <div className="service-icon text-center">
                                <i className="tf-ion-laptop"></i>
                            </div>
                            <h3>Responsive Design</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id tellus. Nullam iaculis arcu at mauris dapibus consectetur.</p>
                            </div>
                        </article>
                        <article className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="500ms" data-wow-delay="400ms">
                            <div className="service-block text-center">
                            <div className="service-icon text-center">
                                <i className="tf-genius"></i>
                            </div>
                            <h3>Media &amp; Advertisement</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id tellus. Nullam iaculis arcu at mauris dapibus consectetur.</p>
                            </div>
                        </article>
                        <article className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="500ms" data-wow-delay="200ms">
                            <div className="service-block text-center">
                            <div className="service-icon text-center">
                                <i className="tf-dial"></i>
                            </div>
                            <h3>Graphic Design</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id tellus. Nullam iaculis arcu at mauris dapibus consectetur.</p>
                            </div>
                        </article>
                        <article className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="500ms" data-wow-delay="400ms">
                            <div className="service-block text-center">
                            <div className="service-icon text-center">
                                <i className="tf-target3"></i>
                            </div>
                            <h3>Apps Development</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id tellus. Nullam iaculis arcu at mauris dapibus consectetur.</p>
                            </div>
                        </article>
                        <article className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="500ms" data-wow-delay="600ms">
                            <div className="service-block text-center kill-margin-bottom">
                            <div className="service-icon text-center">
                                <i className="tf-lifesaver"></i>
                            </div>
                            <h3>Networking</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id tellus. Nullam iaculis arcu at mauris dapibus consectetur.</p>
                            </div>
                        </article>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
export default Services;