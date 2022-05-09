import React from "react";

export class Home extends React.Component {
    render() {
        return (
            <>
                <section className="hero-area overlay" style="background-image: url('images/banner/hero-area.jpg');">
                    <div className="block">
                        <div className="video-button">
                        <a className="popup-video" href="https://www.youtube.com/watch?v=jrkvirglgaQ">
                        <i className="tf-ion-play"></i>
                        </a>
                        </div>
                        <h1>Experience the new reality</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Fugit, excepturi. At recusandae sit perferendis autem,iste tempora nostrum numquam sapiente!</p>
                        <a data-scroll href="#services" className="btn btn-transparent">Explore Us</a>
                    </div>
                </section>
            </> 
        );
    }
}
export default Home;