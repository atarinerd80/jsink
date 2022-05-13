import React from "react";

export class Home extends React.Component {
    render() {
        return (
            <>
                <section className="hero-area overlay">
                    <div className="block">
                        <div className="row">
                            <div className="col-xs-8 offset-xs-2 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4 ">
                                <img className="header-image" src="images/logo.png" />
                            </div>
                        </div>
                        <a href="https://squareup.com/appointments/book/4mun5wvbh9r757/LMMX2Y6ERRVW3/start" target="_blank" className="btn btn-transparent">Book A Consultation</a>
                    </div>
                </section>
            </> 
        );
    }
}
export default Home;