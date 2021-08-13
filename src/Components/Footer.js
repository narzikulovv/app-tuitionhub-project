import React from 'react';
import {IoMdMailUnread} from 'react-icons/io';
import {FaPhoneAlt} from 'react-icons/fa';
import {HiOutlineLocationMarker} from 'react-icons/hi';


const Footer = () => {
    return (
        <div className="footer_main">
            <div className="container footer_con">
                <div className="footer_row row">
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12 footer_col4_1 mb-3">
                        <img src="./images/logo-new.png" alt=""/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, commodi deserunt distinctio
                            fugiat harum id ipsum, iusto libero odio officia pariatur perspiciatis suscipit, ullam.
                            Aliquid ex ipsam nihil provident quae?</p>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6 col-6 footer_col3_2">
                        <h1>Xizmatlar</h1>
                        <ul className="navbar-nav">
                            <li className="nav-item"><a href="#!" className="nav-link mt-3">lorem</a></li>
                            <li className="nav-item"><a href="#!" className="nav-link">lorem</a></li>
                            <li className="nav-item"><a href="#!" className="nav-link">lorem</a></li>
                            <li className="nav-item"><a href="#!" className="nav-link">lorem</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6 col-6 footer_col3_2">
                        <h1>Tarmoqlar</h1>
                        <ul className="navbar-nav">
                            <li className="nav-item"><a href="#!" className="nav-link mt-3">Telegram</a></li>
                            <li className="nav-item"><a href="#!" className="nav-link">Instagram</a></li>
                            <li className="nav-item"><a href="#!" className="nav-link">Tiktok</a></li>
                            <li className="nav-item"><a href="#!" className="nav-link">You Tube</a></li>
                            <li className="nav-item"><a href="#!" className="nav-link">Facebook</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 footer_kontak">
                        <h1>Kontakt</h1>
                        <ul className="navbar-nav">
                            <li className="nav-item"><a target="_blank"
                                                        href="mailto:sardornarzikulov2002@gmail.com"
                                                        className="nav-link mt-3">
                                <span><IoMdMailUnread/></span>
                                 sardornarzikulov2002@gmail.com</a>
                            </li>
                            <li className="nav-item"><a target="_blank" href="tel:+998995552446" className="nav-link"><span><FaPhoneAlt/></span> +998
                                99 555 24 46</a></li>
                            <li className="nav-item"><a target="_blank"
                                                        href="https://www.google.com/maps/place/%D0%97%D0%B0%D0%B0%D0%BC%D0%B8%D0%BD,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@39.9669561,68.3740893,14z/data=!3m1!4b1!4m5!3m4!1s0x38b24ee7a4099b37:0x6504d6252910d6cc!8m2!3d39.9623513!4d68.3935487"
                                                        className="nav-link"><span><HiOutlineLocationMarker/></span> Tashkent,
                                Yashnabot tumani, Ko'prikli ko'chasi, 816-xona</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;