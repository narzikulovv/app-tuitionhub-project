import React, {useEffect} from 'react';
import AdminPages from "./AdminPages";
import {connect} from "react-redux";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {AvForm, AvField} from "availity-reactstrap-validation"
import {setState} from "../redux/action/newsAction";

const AdminNews = (props) => {

    return (
        <AdminPages history={props.history}>
            <div className="container">
                <div className="row">
                    <button type="button" className="btn  ml-auto d-block btn-success"
                            onClick={() => props.setState({open: true})}>Add news
                    </button>
                </div>

                <div className="row mt-3">

                </div>

                <Modal isOpen={props.open} toggle={() => props.setState({open: false})}>
                    <AvForm onSubmit={props.savaNews}>
                        <ModalHeader toggle={() => props.setState({open: false})}>Add News</ModalHeader>
                        <ModalBody>
                            <AvField type="text" name="titleUz" required label="Title (Uz)"/>
                            <AvField type="text" name="titleRu" required label="Title (Ru)"/>
                            <AvField type="text" name="titleEn" required label="Title (En)"/>
                            <AvField type="textarea" name="descriptionUz" required label="Description (Uz)"/>
                            <AvField type="textarea" name="descriptionRu" required label="Description (Ru)"/>
                            <AvField type="textarea" name="descriptionEn" required label="Description (En)"/>
                            <input type="file" accept=".png, .jpg, .svg, .jpeg" />
                        </ModalBody>
                        <ModalFooter>
                            <button type="submit" className="btn btn-success ml-auto d-block"
                                    onClick={() => props.setState({open: false})}>Save
                            </button>
                            <button type="button" className="btn btn-success  d-block"
                            onClick={()=> props.setState({open: false})}
                            >Cansal</button>
                        </ModalFooter>
                    </AvForm>
                </Modal>
            </div>
        </AdminPages>
    );
};

const mapStateToProps = (state) => {
    return {
        open: state.news.open,
        news: state.news.news
    }
};

export default connect(mapStateToProps, {setState})(AdminNews);