import React from "react";
import PortfolioItem from "../components/PortfolioItem";
import PorfolioList from "../data/PortfolioList.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export class Portfolio extends React.Component {
    render() {
        return (
            <>
                <section className="portfolio section" id="portfolio">
                    <div className="container">
                        <div className="row ">
                            <div className="col-lg-12">
                                <div className="title text-center">
                                <h2>Portfolio</h2>
                                <div className="border"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
                                    {PorfolioList.portfolioList.map((item, i) => (
                                        <PortfolioItem key={'item_' + i} item={item} />
                                    ))}
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
export default Portfolio;