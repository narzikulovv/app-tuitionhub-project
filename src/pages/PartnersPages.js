import React, {useState} from 'react';
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";
import {FaArrowRight} from 'react-icons/fa';
const PartnersPages = () => {

    const [block, setBolock] = useState(false);

    const open = () => {
        setBolock(true)
    };

    return (
        <div className="partners_pages_main">
            <NavigationBar/>
            <div className="container partners_pages_con">
                <div className="row partners_pages_row">
                    <div className="col-12">
                        <h1 className="my-4 text-center">Universitetlar bilan Shartnoma</h1>
                    </div>

                    <div className="col-4 partners_pages_col3">
                        <div className="card cer_card one">
                            <div className="card-header1">
                                <h1>Guvohnoma</h1>
                            </div>
                            <div className="card-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores
                                    aspernatur
                                    inventore maxime nam nisi officia, provident quod sequi tempore?</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 partners_pages_col3">
                        <div className="card cer_card two">
                            <div className="card-header1">
                                <h1>Guvohnoma</h1>
                            </div>
                            <div className="card-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores
                                    aspernatur
                                    inventore maxime nam nisi officia, provident quod sequi tempore?</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 partners_pages_col3">
                        <div className="card cer_card three">
                            <div className="card-header1">
                                <h1>Guvohnoma</h1>
                            </div>
                            <div className="card-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores
                                    aspernatur
                                    inventore maxime nam nisi officia, provident quod sequi tempore?</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <h1>Davlatlar</h1>

                        <h4>USA <span><FaArrowRight/></span> 20 universites</h4>
                        <h4>UF <span><FaArrowRight/></span> 15 universites</h4>
                        <h4>USA <span><FaArrowRight/></span> 30 universites</h4>
                        <h4>USA <span><FaArrowRight/></span> 20 universites</h4>

                        {block === true ? <div >
                            <h4>USA <span><FaArrowRight/></span> 20 universites</h4>
                            <h4>UF <span><FaArrowRight/></span> 15 universites</h4>
                            <h4>USA <span><FaArrowRight/></span> 30 universites</h4>
                            <h4>USA <span><FaArrowRight/></span> 20 universites</h4>
                            <h4>USA <span><FaArrowRight/></span> 20 universites</h4>
                            <h4>USA <span><FaArrowRight/></span> 20 universites</h4>
                            <h4>USA <span><FaArrowRight/></span> 20 universites</h4>
                            <h4>USA <span><FaArrowRight/></span> 20 universites</h4>
                            <h4>USA <span><FaArrowRight/></span> 20 universites</h4>
                            <h4>USA <span><FaArrowRight/></span> 20 universites</h4>
                            <h4>USA <span><FaArrowRight/></span> 20 universites</h4>
                            <h4>USA <span><FaArrowRight/></span> 20 universites</h4>
                            <h4>USA <span><FaArrowRight/></span> 20 universites</h4>
                            <h4>USA <span><FaArrowRight/></span> 20 universites</h4>
                            <h4>USA <span><FaArrowRight/></span> 20 universites</h4>
                        </div> : ""}


                        <button className="btn btn-success" onClick={open}>105 wiev</button>
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default PartnersPages;