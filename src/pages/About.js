import React from "react";

export class About extends React.Component {
    render() {
        return (
            <>
                <section className="section about-2 padding-0 bg-dark" id="about">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="title text-center wow fadeIn" data-wow-duration="1500ms" >
                                <h2>About <span className="color">Us</span> </h2>
                                <div className="border"></div>
                            </div>
                            <div className="col-lg-6 padding-0 ">
                                <img className="img-responsive" src="images/about/about.jpg" alt="" />
                            </div>
                            <div className="col-lg-6">
                                <div className="content-block">
                                    <h2>Monticello's Only Licensed Tattoo Shop</h2>
                                    <p>Welcome to JS Ink! Founded in 2022 by owner Jason Slagle, JS Ink focuses on quality over quantity. We set up our clients by appointment only, in order to give 100% attention to our clients during their entire service.</p>
                                    <p>Our process for tattooing begins with a one-on-one consultation to determine exactly what the client is looking for. From there, an appointment is set while our artist draws up the proof for the tattoo. Once designs have been approved, all that remains is the tattooing itself.</p>
                                    <p>We strive to ensure that cleanliness is our top priority, along with client satisfaction. All tools used are fully disposable, and our tattoo artist uses disposable gloves and single-use equipment. All of these precautions are in place to guarantee your safety and ease of mind during your tattoo session.</p>
                                    <p>We look forward to having you in our shop! To begin your next tattoo, click the link above to book a consultation!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
export default About;