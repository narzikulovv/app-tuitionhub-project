import React from 'react';
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";

const ContakPages = () => {

    const openStudentPages = () => {
        window.location.href = "/contak/student"
    };

    const openPartnersPages = () => {
        window.location.href = "/contak/partners"
    };

    return (
        <div className="contakpages_main">
            <NavigationBar/>
            <div className="contakpages_main_con container">
                <div className="row contakpages_main_row">
                    <div className="col-6 contakpages_main_row">
                        <button type="button" className="btn-success btn" onClick={openStudentPages}>ads</button>
                    </div>
                    <div className="col-6 contakpages_main_row">
                        <button type="button" className="btn-success btn" onClick={openPartnersPages}>ds</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ContakPages;