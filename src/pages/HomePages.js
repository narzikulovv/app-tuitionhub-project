import React from 'react';
import NavigationBar from "../Components/NavigationBar";
import Home from "../Components/Home";
import Programs from "../Components/Programs";
import Certificates from "../Components/Certificates";
import News from "../Components/News";
import Contak from "../Components/Contak";
import Location from "../Components/Location";
import Footer from "../Components/Footer";

const HomePages = () => {
    return (
        <div>
            <NavigationBar/>
            <Home/>
            <Programs/>
            <Certificates/>
            <News/>
            <Contak/>
            <Location/>
            <Footer/>
        </div>
    );
};

export default HomePages;