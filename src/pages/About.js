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
                                    <h2>Monticello's Only Tattoo Shop</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam tempora itaque, autem dolores culpa cum mollitia voluptate nesciunt voluptatibus quasi.</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eveniet vel et mollitia nemo corporis sed ut, exercitationem incidunt, rerum nam doloremque quos ratione doloribus, officiis adipisci error quasi soluta?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eveniet vel et mollitia nemo corporis sed ut, exercitationem incidunt, rerum nam doloremque quos ratione doloribus, officiis adipisci error quasi soluta?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eveniet vel et mollitia nemo corporis sed ut, exercitationem incidunt, rerum nam doloremque quos ratione doloribus, officiis adipisci error quasi soluta?</p>
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