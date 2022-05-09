import React from "react";

export class Posts extends React.Component {
    render() {
        return (
            <>
                <section id="blog" className="section">
                    <div className="container">
                        <div className="row">
                        <div className="title text-center wow fadeInDown">
                            <h2> Latest <span className="color">Posts</span></h2>
                            <div className="border"></div>
                        </div>
                        <div className="clearfix">
                            <article className="col-md-4 col-sm-6 col-xs-12 clearfix wow fadeInUp" data-wow-duration="500ms">
                            <div className="post-block">
                                <div className="media-wrapper">
                                <img src="images/blog/blog-post-1.jpg" alt="amazing caves coverimage" className="img-responsive" />
                                </div>
                                <div className="content">
                                <h3><a href="">Simple Image Post</a></h3>
                                <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non skateboard dolor brunch.</p>
                                <a className="btn btn-transparent" href="blog-single.html">Read more</a>
                                </div>
                            </div>
                            </article>
                            <article className="col-md-4 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="500ms" data-wow-delay="200ms">
                            <div className="post-block">
                                <div id="gallery-post" className="media-wrapper">
                                <div className="item">
                                    <img src="images/blog/blog-post-1.jpg" alt="blog post" className="img-responsive" />
                                </div>
                                <div className="item">
                                    <img src="images/blog/blog-post-3.jpg" alt="blog post" className="img-responsive" />
                                </div>
                                <div className="item">
                                    <img src="images/blog/blog-post-2.jpg" alt="blog post | Meghna" className="img-responsive" />
                                </div>
                                </div>
                                <div className="content">
                                <h3><a href="">Simple Slider Post</a></h3>
                                <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non skateboard dolor brunch.</p>
                                <a className="btn btn-transparent" href="blog-single.html">Read more</a>
                                </div>
                            </div>
                            </article>
                            <article className="col-md-4 col-sm-6 col-xs-12 wow fadeInUp" data-wow-duration="500ms" data-wow-delay="400ms">
                            <div className="post-block">
                                <div className="media-wrapper">
                                <img src="images/blog/blog-post-6.jpg" alt="amazing caves coverimage" className="img-responsive" />
                                </div>
                                <div className="content">
                                <h3><a href="">Simple Image Post</a></h3>
                                <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non skateboard dolor brunch.</p>
                                <a className="btn btn-transparent" href="blog-single.html">Read more</a>
                                </div>
                            </div>
                            </article>
                        </div>
                        <div className="all-post text-center">
                            <a className="btn btn-main" href="blog.html">View All Post</a>
                        </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
export default Posts;