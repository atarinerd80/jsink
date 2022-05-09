import React from "react";
import Header from "./Home";

export class Nav extends React.Component {
    render() {
        return (
            <>
                <header id="navigation" className="navbar navigation">
                    <div className="container">
                        <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        </button>
                        </div>
                        <nav className="collapse navbar-collapse navbar-right" role="Navigation">
                        <ul id="nav" className="nav navbar-nav navigation-menu">
                            <li><a data-scroll href="#body">Home</a></li>
                            <li><a data-scroll href="#about">About Us</a></li>
                            <li><a data-scroll href="#services">Services</a></li>
                            <li><a data-scroll href="#portfolio">Portfolio</a></li>
                            <li><a data-scroll href="#our-team">Team</a></li>
                            <li><a data-scroll href="#pricing">Pricing</a></li>
                            <li><a data-scroll href="#blog">Blog</a></li>
                            <li><a data-scroll href="#contact-us">Contact</a></li>
                        </ul>
                        </nav>
                    </div>
                </header>
            </>
        );
    }
}
export default Nav;