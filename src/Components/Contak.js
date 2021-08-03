import React from 'react';

const Contak = () => {
    return (
        <div className="contak_main">
            <div className="container contak_con">
                <div className="contak_row row">
                    <div className="col-12 con_aloqa_12">
                        <h1>Biz bilan aloqa</h1>
                    </div>
                    <div className="col-12 col-lg-6 h-100 contak_left_col6">
                        <div className="card contak_card">
                            <div className="card-body">
                                <h1>Yagona koll-markazi</h1>
                                <h2>+998 <span>78 122 00 00</span></h2>
                                <h3>Mijozlarni qo'llab quvvatlash hizmati:</h3>
                                <h5><a href="https://t.me/sardornarzikulov1" target="_blank">tme/sardor.narzikulov1</a></h5>
                                <h4>Rahbariyat qabul kunlari</h4>
                                <div className="line"></div>
                                <div className="lavozim d-flex align-items-center justify-content-between">
                                    <h6>Lavozim</h6>
                                    <h6>FISh</h6>
                                    <h6>Qabul kunlari va vaqti</h6>
                                </div>
                                <div className="line"></div>
                                <div className="lavozim d-flex align-items-center justify-content-between">
                                    <h6>Bosh direktor</h6>
                                    <h6>Sardor Narzikulov Davlat o'gli</h6>
                                    <h6>Payshanba 16:00 dan 18:00 gach</h6>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 contak_right_col6">
                        <div className="card">
                            <h1>Habar jo'natish</h1>
                            <input type="text" className="form-control" placeholder="Ismingiz"/>
                            <input type="number" className="form-control" placeholder="Telefon raqamingiz"/>
                            <input type="email" className="form-control" placeholder="E-mail (agar bo'lsa)"/>
                            <textarea type="text" className="form-control" placeholder="Xabar matni"/>
                            <button type="button" className="btn">Jo'natish</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contak;