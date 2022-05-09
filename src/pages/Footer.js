import React from "react";

export class Footer extends React.Component {
    render() {
        return (
            <>
                <footer id="footer" className="bg-one">
                    <div className="container">
                        <div className="row wow fadeInUp" data-wow-duration="500ms">
                        <div className="col-lg-12">
                            <div className="social-icon">
                            <ul className="list-inline">
                                <li><a href="https://facebook.com/themefisher"><i className="tf-ion-social-facebook"></i></a></li>
                                <li><a href="https://twitter.com/themefisher"><i className="tf-ion-social-twitter"></i></a></li>
                                <li><a href="https://www.youtube.com/channel/UCx9qVW8VF0LmTi4OF2F8YdA"><i className="tf-ion-social-youtube"></i></a></li>
                                <li><a href="https://dribbble.com/themefisher"><i className="tf-ion-social-dribbble-outline"></i></a></li>
                                <li><a href="https://pinterest.com/themefisher"><i className="tf-ion-social-pinterest-outline"></i></a></li>
                            </ul>
                            </div>
                            <div className="copyright text-center">
                            <br />
                            <p>
                                Design And Developed by <a href="http://www.themefisher.com">Themefisher.com</a>. Copyright
                                &copy; 2022 All Rights Reserved.
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}
export default Footer;