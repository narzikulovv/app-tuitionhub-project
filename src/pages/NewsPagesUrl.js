import React, {useEffect} from 'react';
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";
import {connect, useDispatch, useSelector} from "react-redux";
import {getAllNews} from "../redux/action/newsAction";

const NewsPagesUrl = (props) => {

    const dispatch = useDispatch();
    const {news} = useSelector((s) => s.news);

    useEffect(() => {
        dispatch(getAllNews());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="url_main">
            <NavigationBar/>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="card">
                            <div className="card-header">
                                <img src={props.hook} alt=""/>
                            </div>
                            <div className="card-body">
                                <h2>{news.titleUz}</h2>
                                <p>{news.descriptionUz}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        open: state.news.hook
    }
};

export default connect(mapStateToProps)(NewsPagesUrl);