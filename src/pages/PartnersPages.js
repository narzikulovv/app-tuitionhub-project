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
                   <div className="container flag_con">
                       <h4 className="text-secondary  ml-3 mt-4">Davlatlar</h4>
                       <div className="row flag_row mb-5">

                           <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                               <a href="#!" className="large-menu-item flag_img">
                                   <img src="images/maxresdefault.jpg" alt=""/>
                                   <span className="title">AQSH</span></a>
                           </div>
                              <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                  <div className="flag">
                                      <a href="#!" className="large-menu-item flag_img">
                                          <img src="images/british-flag-icon-12988750.jpg" alt=""/>
                                          <span className="title">Buyuk Britaniya</span></a>
                                  </div>
                              </div>
                           <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                               <a href="#!" className="large-menu-item flag_img">
                                   <img src="images/98470_flag_512x512.png" alt=""/>
                                   <span className="title">Fransiya</span></a>
                           </div>
                           <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                               <a href="#!" className="large-menu-item flag_img">
                                   <img src="images/flag_japan.png" alt=""/>
                                   <span className="title">Yaponiya</span></a>
                           </div>
                           <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                               <a href="#!" className="large-menu-item flag_img">
                                   <img src="images/ru.png" alt=""/>
                                   <span className="title">Rossiya</span></a>
                           </div>
                           <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                               <a href="#!" className="large-menu-item flag_img">
                                   <img src="images/germany-.jpg" alt=""/>
                                   <span className="title">Germaniya</span></a>
                           </div>
                           <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                               <a href="#!" className="large-menu-item flag_img">
                                   <img src="images/download.png" alt=""/>
                                   <span className="title">Turkiya</span></a>
                           </div>

                           <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                               <a href="#!" className="large-menu-item flag_img">
                                   <img src="images/argin.jpg" alt=""/>
                                   <span className="title">Argintina</span></a>
                           </div>
                           <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                               <a href="#!" className="large-menu-item flag_img">
                                   <img src="images/kanada.png" alt=""/>
                                   <span className="title">Kanada</span></a>
                           </div>
                           <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                               <a href="#!" className="large-menu-item flag_img">
                                   <img src="images/iroq.png" alt=""/>
                                   <span className="title">Iroq</span></a>
                           </div>
                           <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                               <a href="#!" className="large-menu-item flag_img">
                                   <img src="images/maxresdefault.jpg" alt=""/>
                                   <span className="title">AQSH</span></a>
                           </div>
                           <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                               <a href="#!" className="large-menu-item flag_img">
                                   <img src="images/angliya.png" alt=""/>
                                   <span className="title">Angliya</span></a>
                           </div>
                           <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                               <a href="#!" className="large-menu-item flag_img">
                                   <img src="images/flag_spain.png" alt=""/>
                                   <span className="title">Ispaniya</span></a>
                           </div>
                           <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                               <a href="#!" className="large-menu-item flag_img">
                                   <img src="images/Sudan-icon.png" alt=""/>
                                   <span className="title">Saudiya Arabiston</span></a>
                           </div>
                           <div className="col-lg-3 col-md-4  col-sm- col-126">
                               <a href="#!" className="large-menu-item flag_img">
                                   <img src="images/Ukraine-icon.png" alt=""/>
                                   <span className="title">Ukraina</span></a>
                           </div>
                           <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                               <a href="#!" className="large-menu-item flag_img">
                                   <img src="images/latviya.png" alt=""/>
                                   <span className="title">Latviya</span></a>
                           </div>
                       </div>
                   </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default PartnersPages;