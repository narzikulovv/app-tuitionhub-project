import React, {useState, useEffect} from 'react';
import NavigationBar from "../Components/NavigationBar";
import Home from "../Components/Home";
import Programs from "../Components/Programs";
import Certificates from "../Components/Certificates";
import News from "../Components/News";
import Contak from "../Components/Contak";
import Footer from "../Components/Footer";
import {Modal, ModalBody, ModalHeader} from "reactstrap";

const HomePages = () => {

    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);
    const openModal = () => {
        setOpen({
            open: true
        })
    };

    useEffect(()=>{
        setTimeout( () => {
            setOpen(!open)
        }, 10000);
    }, []);
    return (
        <div>

            <Modal isOpen={open} toggle={()=> toggle({open: false})}>
                <ModalHeader toggle={()=> toggle({open: false})}>Habar jo'nating</ModalHeader>
                <ModalBody>
                    <form>
                        <input type="text" placeholder="Ism" className="form-control mt-3 "/>
                        <input type="text" placeholder="Familiya" className="form-control mt-3 "/>
                        <input type="gmail" placeholder="E mail" className="form-control mt-3 "/>
                        <textarea typeof="text" placeholder="lorem" className="form-control mt-3 "/>
                        <button type="button" className="btn btn-success m-3 ml-auto d-flex mr-0" >Jo'natish</button>
                    </form>
                </ModalBody>
            </Modal>


            <NavigationBar/>
            <Home/>
            <Programs/>
            <Certificates/>
            <News/>
            <Contak/>
            <Footer/>
        </div>
    );
};

export default HomePages;