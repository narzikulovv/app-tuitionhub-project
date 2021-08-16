import React from 'react';
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";
import {Link} from "react-router-dom"

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
                    <div className="col-6 contakpages_main_button">
                        <button type="button" className="btn-success btn"><Link className="nav-link" to="/student">Student</Link></button>
                    </div>
                    <div className="col-6 contakpages_main_button">
                        <button type="button" className="btn-success btn"><Link className="nav-link" to="/partners">Partners</Link></button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ContakPages;