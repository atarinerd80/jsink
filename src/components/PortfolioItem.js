import React from "react";

export class PortfolioItem extends React.Component {
    render() {
        return (
            <>
                <div className="filtr-item col-lg-4">
                    <div className="portfolio-block">
                        <img className="img-responsive" src={this.props.item.image} alt={this.props.item.alt} />
                    </div>
                </div>
            </>
        );
    }
}
export default PortfolioItem;