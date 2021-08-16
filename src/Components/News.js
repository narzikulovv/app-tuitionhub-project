import React, {useEffect} from 'react';
import {AiOutlineArrowRight} from 'react-icons/ai';
import {useDispatch, useSelector} from "react-redux";
import {getAllNews} from "../redux/action/newsAction";
import {connect} from "react-redux";
import {GET_ONE_SITES} from "../redux/type/newsType";
import {Link} from "react-router-dom"


const News = (props) => {

    const dispatch = useDispatch();
    const {news} = useSelector((s) => s.news);

    useEffect(() => {
        dispatch(getAllNews());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const openNews = (p) => {
        window.location.href = "/news"
    };

    const openMaess = (i) => {
        dispatch({type: GET_ONE_SITES, payload: i});
    };

    return (
        <div className="news_main">
            <div className="container news_con">
                <div className="row news_row">
                    <div className="col-12 news_col12">
                        <h1>News</h1>
                    </div>

                    {news.map((i, idx) =>
                            idx < 3 ?
                                <div key={i.id} className="col-12 col-md-6 col-lg-4 news_col4">
                                    <div className="card news_card">
                                        <div className="card-header">
                                            <img src={i.imgUrl} alt="img"/>
                                        </div>
                                        <div className="card-body ">
                                            <h2>{i.titleUz}</h2>
                                            <Link className="link" to={"/news/" + i.id} onClick={openMaess}>{i.descriptionUz.length > 100 ? i.descriptionUz.substring(0, 100) + " ..." : ""}</Link>

                                        </div>
                                    </div>
                                </div> : ""
                    )}
                    <div className="col-12 news_more_col2">
                        <button type="button" className="btn" onClick={openNews}>Barchasini
                            ko'rish <span><AiOutlineArrowRight/></span></button>
                    </div>

                </div>
            </div>

        </div>
    );
};

const mapStateToProps = (stete) => {
   return{
       news: stete.news.hook
   }
};


export default News ;