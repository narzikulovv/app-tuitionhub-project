import React from 'react';
import { GiCheckMark } from 'react-icons/gi';

const Programs = () => {

    return (
        <div className="programs_main">
            <div className="container con_programs">
                <div className="row row_programs">
                    <div className="col-12">
                        <h1 className="text-center">About us</h1>
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <div className="card-header">
                                <h1>Our Mission</h1>
                            </div>
                            <div className="card-body">
                                <h4><span><GiCheckMark/></span> Lorem</h4>
                                <h4><span><GiCheckMark/></span> Lorem</h4>
                                <h4><span><GiCheckMark/></span> Lorem</h4>
                                <h4><span><GiCheckMark/></span> Lorem</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <div className="card-header">
                                <h1>Our Vision</h1>
                            </div>
                            <div className="card-body">
                                <h4><span><GiCheckMark/></span> Lorem</h4>
                                <h4><span><GiCheckMark/></span> Lorem</h4>
                                <h4><span><GiCheckMark/></span> Lorem</h4>
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