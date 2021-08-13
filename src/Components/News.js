import React from 'react';
import {AiOutlineArrowRight} from 'react-icons/ai';

const News = (props) => {

    const openNews = (p) => {

        window.location.href = "/news"
    };
    return (
        <div className="news_main">
            <div className="container news_con">
                <div className="row news_row">
                    <div className="col-12 news_col12">
                        <h1>News</h1>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 news_col4">
                        <div className="card news_card">
                            <div className="card-header">
                                <img src="./images/news-two.png" alt=""/>
                            </div>
                            <div className="card-body">
                                <h1>title</h1>
                                <h4>description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere hic
                                    nisi rem repellat sed, sequi sunt unde vel? Accusantium aliquid consequatur
                                    excepturi, minus necessitatibus quaerat quas tenetur? Esse, molestiae, omnis!</h4>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 news_col4">
                        <div className="card news_card">
                            <div className="card-header">
                                <img src="./images/news-three.png" alt=""/>
                            </div>
                            <div className="card-body">
                                <h1>title</h1>
                                <h4>description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere hic
                                    nisi rem repellat sed, sequi sunt unde vel? Accusantium aliquid consequatur
                                    excepturi, minus necessitatibus quaerat quas tenetur? Esse, molestiae, omnis!</h4>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 news_col4">
                        <div className="card news_card">
                            <div className="card-header">
                                <img src="./images/news-four.png" alt=""/>
                            </div>
                            <div className="card-body">
                                <h1>title</h1>
                                <h4>description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere hic
                                    nisi rem repellat sed, sequi sunt unde vel? Accusantium aliquid consequatur
                                    excepturi, minus necessitatibus quaerat quas tenetur? Esse, molestiae, omnis!</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 news_more_col2">
                        <button type="button" className="btn" onClick={openNews}>Barchasini
                            ko'rish <span><AiOutlineArrowRight/></span></button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default News;