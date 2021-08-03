import React from 'react';

const Home = () => {
    return (
        <div className="home_main">
            <div className="container-fluid home_con_fluid">
                <div className="container home_con">
                    <div className="row home_row">
                        <div className="home_col_7 col-lg-7 col-md-12 col-sm-12 col-12">
                            <h1>Biz bilan istalgan davlatingizning eng nufuzli institutlariga Grand yuting!</h1>

                            <h2 className="aqsh">Qaysi davlatda o'qishni hohlaysiz? <span>AQSH</span> mi? <span>muammosiz!</span></h2>

                        </div>
                        <div className="col-5 home_col_5">
                            {/*<img className="bg" src="./images/background.png" alt=""/>*/}
                            {/*<img className="student" src="./images/student.png" alt=""/>*/}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;