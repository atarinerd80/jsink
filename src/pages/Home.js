import React from "react";

export class Home extends React.Component {
    render() {
        return (
            <>
                <section className="hero-area overlay">
                    <div className="block">
                        <div className="row">
                            <div className="col-lg-4 offset-lg-4">
                                <img className="header-image" src="images/logo.png" />
                            </div>
                        </div>
                        <a href="#about" className="btn btn-transparent">Explore Us</a>
                    </div>
                </section>
            </> 
        );
    }
}
export default Home;