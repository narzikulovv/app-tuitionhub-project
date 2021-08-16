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
    // const openModal = () => {
    //     setOpen({
    //         open: true
    //     })
    // };

    useEffect(()=>{
        setTimeout( () => {
            setOpen(!open)
        }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div>

            <Modal className="w-25 rounded-pill" isOpen={open} toggle={()=> toggle({open: false})}>
               <div className="modal_s rounded">
                   <ModalHeader className="text-white" toggle={()=> toggle({open: false})}>Ariza topshirish</ModalHeader>
                   <ModalBody>

                       <form>
                           <input type="text" placeholder="Ism Familiya" className="form-control mt-3 bg-transparent text-white"/>

                           <input type="gmail" placeholder="telefon" className="form-control mt-3 bg-transparent "/>
                           <textarea typeof="text" placeholder="Savol yo'llang" className="form-control mt-3 bg-transparent "/>
                           <button type="button" className="btn btn-secondary m-3 ml-auto d-flex mr-0" >Jo'natish</button>
                       </form>
                   </ModalBody>
               </div>
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