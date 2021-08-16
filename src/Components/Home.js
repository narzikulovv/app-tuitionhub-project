import React from 'react';
import Slider from "react-slick";
import {getText} from "../locales";

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="home_main">
            <div className="container-fluid home_con_fluid">
                <div className="container home_con">
                    <div className="row home_row">

                        <div className="col-12">

                            <Slider {...settings}>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="home_col_7 col-7">
                                            <h1>{getText("bizbilan")}</h1>

                                            <h2 className="aqsh"> {getText("qaysi")}</h2>

                                        </div>
                                        <div className="col-5 home_col_5">
                                            <img src="./images/carusel1.png" className="w-100" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="home_col_7 col-7">
                                            <h1>{getText("bizbilan")}</h1>

                                            <h2 className="aqsh">{getText("qaysi")}</h2>

                                        </div>
                                        <div className="col-5 home_col_5">
                                            <img src="./images/carusel2.png" className=" mt-5" width="120%" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="home_col_7 col-7">
                                            <h1>{getText("bizbilan")}</h1>

                                            <h2 className="aqsh">{getText("qaysi")}</h2>

                                        </div>
                                        <div className="col-5 home_col_5">
                                            <img src="./images/carusel3.png" className="w-100" alt=""/>
                                        </div>
                                    </div>
                                </div>

                            </Slider>
                        </div>


                        {/*<div className="home_col_7 col-lg-7 col-md-12 col-sm-12 col-12">*/}
                        {/*    <h1>Biz bilan istalgan davlatingizning eng nufuzli institutlariga Grand yuting!</h1>*/}

                        {/*    /!*<h2 className="aqsh">Qaysi davlatda o'qishni hohlaysiz? <span>AQSH</span> mi? <span>muammosiz!</span></h2>*!/*/}

                        {/*</div>*/}
                        {/*<div className="col-5 home_col_5">*/}

                        {/*</div>*/}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;