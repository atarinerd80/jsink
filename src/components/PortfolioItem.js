import React from "react";

export class PortfolioItem extends React.Component {
    render() {
        return (
            <>
                <div>
                    <img src={this.props.item.image} alt={this.props.item.alt}/>
                    <p className="legend">{this.props.item.alt}</p>
                </div>
            </>
        );
    }
}
export default PortfolioItem;