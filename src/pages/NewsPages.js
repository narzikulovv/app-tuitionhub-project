import React from 'react';
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";

const NewsPages = () => {
    return (
        <div className="news_pages_main">
            <NavigationBar/>
            <div className="news_pages_bg">
                <div className="container news_pages_con">
                    <div className="row news_pages_row pt-5">
                        <div className="col-6 news_pages_col6">
                            <div className="card border-0 bg-transparent">
                                <div className="card-header p-0">
                                    <img src="./images/news-one.png" className="w-100" alt=""/>
                                </div>
                                <div className="card-body p-0">
                                    <h2 className="mt-2">Title</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae eos ipsa ipsam
                                        ipsum, numquam praesentium quam repellendus! Accusantium aspernatur autem
                                        consectetur culpa dignissimos dolore dolorum, eligendi et ex facilis fugiat, id
                                        illum in labore maiores maxime minus necessitatibus nemo nesciunt nisi odio
                                        pariatur
                                        perfere.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 news_pages_col6_right">
                            <div className="news d-flex">
                                <div className="image">
                                    <img src="./images/news-two.png" alt=""/>
                                </div>
                                <div className="title">
                                    <h2>title</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum iusto magni omnis
                                        perspiciatis voluptate. Accusamus assumenda autem cupiditate dicta, ducimus modi
                                        </p>
                                </div>
                            </div>
                            <div className="news d-flex">
                                <div className="image">
                                    <img src="./images/news-three.png" alt=""/>
                                </div>
                                <div className="title">
                                    <h2>title</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum iusto magni omnis
                                        perspiciatis voluptate. Accusamus assumenda autem cupiditate dicta, ducimus modi
                                    </p>
                                </div>
                            </div>
                            <div className="news d-flex">
                                <div className="image">
                                    <img src="./images/news-four.png" alt=""/>
                                </div>
                                <div className="title">
                                    <h2>title</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum iusto magni omnis
                                        perspiciatis voluptate. Accusamus assumenda autem cupiditate dicta, ducimus modi
                                    </p>
                                </div>
                            </div>
                            <div className="news d-flex">
                                <div className="image">
                                    <img src="./images/news-two.png" alt=""/>
                                </div>
                                <div className="title">
                                    <h2>title</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum iusto magni omnis
                                        perspiciatis voluptate. Accusamus assumenda autem cupiditate dicta, ducimus modi
                                    </p>
                                </div>
                            </div>
                            <div className="news d-flex">
                                <div className="image">
                                    <img src="./images/news-three.png" alt=""/>
                                </div>
                                <div className="title">
                                    <h2>title</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum iusto magni omnis
                                        perspiciatis voluptate. Accusamus assumenda autem cupiditate dicta, ducimus modi
                                    </p>
                                </div>
                            </div>
                            <div className="news d-flex">
                                <div className="image">
                                    <img src="./images/news-four.png" alt=""/>
                                </div>
                                <div className="title">
                                    <h2>title</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum iusto magni omnis
                                        perspiciatis voluptate. Accusamus assumenda autem cupiditate dicta, ducimus modi
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default NewsPages;