import React from 'react';
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";

const ContackStudent = () => {
    return (
        <div className="contack_student_main">
            <NavigationBar/>
            <div className="container contack_student_main_con">
                <div className="row contack_student_main_row">
                    <div className="col-6 contack_student_main_col6">
                        <div className="card">
                            <div className="card-body ">
                                <input type="text" className="form-control" placeholder="Ism Familiya"/>
                                <input type="text" className="form-control" placeholder="Tel raqam"/>
                                <input type="text" className="form-control" placeholder="Lorem"/>
                                <textarea type="text" className="form-control" placeholder="Savol yo'llang"></textarea>
                                <button type="button" className="btn btn-success  d-block ml-auto ">Sumbit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ContackStudent;