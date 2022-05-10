import React from "react";

export class Footer extends React.Component {
    render() {
        return (
            <>
                <footer id="footer" className="bg-one">
                    <div className="container">
                        <div className="row wow fadeInUp">
                            <div className="col-lg-12">
                                <div className="copyright text-center">
                                    <p>
                                        Developed by Thomas Slagle. Copyright
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