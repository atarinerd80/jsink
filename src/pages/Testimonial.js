import React from "react";

export class Testimonial extends React.Component {
    render() {
        return (
            <>
                <section id="testimonial" className="testimonial overly section bg-2">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-12">
                            <div id="testimonials" className="wow fadeInUp" data-wow-duration="500ms" data-wow-delay="100ms">
                            <div className="item text-center">
                                <div className="client-thumb">
                                <img src="images/team/client-1.jpg" className="img-responsive" alt="Meghna" />
                                </div>
                                <div className="client-info">
                                <div className="client-meta">
                                    <h3>Jonathon Andrew</h3>
                                    <span>Dec 26, 2018</span>
                                </div>
                                <div className="client-comment">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium minima ex, quia error, deserunt voluptatibus repellendus? Incidunt eligendi aliquam repellat molestias, vel sed optio rem odit quis ratione non consequuntur!</p>
                                </div>
                                </div>
                            </div>
                            <div className="item text-center">
                                <div className="client-thumb">
                                <img src="images/team/client-2.jpg" className="img-responsive" alt="Meghna" />
                                </div>
                                <div className="client-info">
                                <div className="client-meta">
                                    <h3>Jonathon Andrew</h3>
                                    <span>Dec 26, 2018</span>
                                </div>
                                <div className="client-comment">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel reiciendis qui in laborum obcaecati expedita blanditiis animi placeat, nemo exercitationem porro. Consequuntur qui commodi minima molestiae, dolores reprehenderit nemo inventore.</p>
                                </div>
                                </div>
                            </div>
                            <div className="item text-center">
                                <div className="client-thumb">
                                <img src="images/team/client-1.jpg" className="img-responsive" alt="Meghna" />
                                </div>
                                <div className="client-info">
                                <div className="client-meta">
                                    <h3>Jonathon Andrew</h3>
                                    <span>Dec 26, 2018</span>
                                </div>
                                <div className="client-comment">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia dolorem non delectus neque, voluptatem accusamus atque expedita doloribus minima iusto nemo, numquam eos quia maiores harum! Quaerat illum beatae necessitatibus!</p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
export default Testimonial;