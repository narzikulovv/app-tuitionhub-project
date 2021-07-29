import React from 'react';
import { GiCheckMark } from 'react-icons/gi';

const Programs = () => {

    return (
        <div className="programs_main">
            <div className="container con_programs">
                <div className="row row_programs">
                    <div className="col-12 col12_programs">
                        <h1 className="text-center">About us</h1>
                    </div>
                    <div className="col-12 col-md-12 col-sm-12 col-lg-6 col6_programs">
                        <div className="card card_programs">
                            <div className="card-header">
                                <h1>Our Mission</h1>
                            </div>
                            <div className="card-body">
                                <h4><span><GiCheckMark/></span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, placeat.</h4>
                                <h4><span><GiCheckMark/></span> Lorem ipsum dolor sit amet.</h4>
                                <h4><span><GiCheckMark/></span> Lorem ipsum dolor sit amet, consectetur.</h4>
                                <h4><span><GiCheckMark/></span> Lorem</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-sm-12 col-lg-6 col6_programs">
                        <div className="card card_programs">
                            <div className="card-header">
                                <h1>Our Vision</h1>
                            </div>
                            <div className="card-body">
                                <h4><span><GiCheckMark/></span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, placeat.</h4>
                                <h4><span><GiCheckMark/></span> Lorem ipsum dolor sit amet.</h4>
                                <h4><span><GiCheckMark/></span> Lorem ipsum dolor sit amet, consectetur.</h4>
                                <h4><span><GiCheckMark/></span> Lorem</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Programs;