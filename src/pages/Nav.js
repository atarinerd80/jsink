import React from "react";

export class Nav extends React.Component {
    render() {
        return (
            <>
                <header id="navigation" className="navbar navigation">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                        <img className="nav-logo" src="images/logo.png"/>
                        </a>
                        <nav className="navbar-right">
                            <ul id="nav" className="nav navbar-nav navigation-menu">
                                <li><a data-scroll href="#body">Home</a></li>
                                <li><a data-scroll href="#about">About Us</a></li>
                                <li><a data-scroll href="#services">Services</a></li>
                                <li><a data-scroll href="#portfolio">Portfolio</a></li>
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