import React, {useState} from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col} from 'reactstrap';
import {BsCheckAll} from 'react-icons/bs';
import {BiGlobeAlt} from 'react-icons/bi';
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";

const ProgramsPages = () => {

    const [activeTab, setActiveTab] = useState('1');


    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    return (
        <div className="programs_pages_main">
            <NavigationBar/>
            <div className="programs_pages_bg">
                <div className="container programs_pages_con">
                    <div className="row programs_pages_row">
                        <div className="tab">
                            <Nav tabs>
                                <NavItem>
                                    <NavLink
                                        className={{active: activeTab === '1'}}
                                        onClick={() => {
                                            toggle('1');
                                        }}
                                    >
                                        Bakalavr
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={{active: activeTab === '2'}}
                                        onClick={() => {
                                            toggle('2');
                                        }}
                                    >
                                        Magistratura
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={{active: activeTab === '3'}}
                                        onClick={() => {
                                            toggle('3');
                                        }}
                                    >
                                        PhD
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={activeTab}>
                                <TabPane tabId="1">
                                    <Row>
                                        <Col sm="12">
                                            <h3>Sohalar</h3>
                                            <h6><span><BsCheckAll/></span> Lorem</h6>
                                            <h6><span><BsCheckAll/></span> Lorem</h6>
                                            <h6><span><BsCheckAll/></span> Lorem</h6>
                                            <h6><span><BsCheckAll/></span> Lorem</h6>
                                            <h6><span><BsCheckAll/></span> Lorem</h6>


                                            <h3>Talablar</h3>
                                            <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at
                                                autem blanditiis commodi, cupiditate dolorem doloribus enim error
                                                eveniet expedita facilis ipsa iusto laudantium natus nobis odio optio
                                                quos veniam!</h6>
                                            <h3>Grand beruvchi davlatlar</h3>
                                            <h6><span><BiGlobeAlt/></span> Rassiya</h6>
                                            <h6><span><BiGlobeAlt/></span> Amerika</h6>
                                            <h6><span><BiGlobeAlt/></span> Yaponiya</h6>
                                            <h6><span><BiGlobeAlt/></span> Dubai</h6>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="2">
                                    <Row>
                                        <Col sm="12">
                                            <h3>Sohalar</h3>
                                            <h6><span><BsCheckAll/></span> Lorem</h6>
                                            <h6><span><BsCheckAll/></span> Lorem</h6>
                                            <h6><span><BsCheckAll/></span> Lorem</h6>
                                            <h6><span><BsCheckAll/></span> Lorem</h6>
                                            <h6><span><BsCheckAll/></span> Lorem</h6>
                                            <h6><span><BsCheckAll/></span> Lorem</h6>
                                            <h6><span><BsCheckAll/></span> Lorem</h6>


                                            <h3>Talabalar</h3>
                                            <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at
                                                autem blanditiis commodi, cupiditate dolorem doloribus enim error
                                                eveniet expedita facilis ipsa iusto laudantium natus nobis odio optio
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis
                                                dignissimos doloremque dolores dolorum exercitationem minus molestiae
                                                nam, quia quis recusandae sapiente ullam ut! Animi doloremque ea iste
                                                nisi reprehenderit.
                                                quos veniam!</h6>
                                            <h3>Grand beruvchi davlatlar</h3>
                                            <h6><span><BiGlobeAlt/></span> Rassiya</h6>
                                            <h6><span><BiGlobeAlt/></span> Amerika</h6>
                                            <h6><span><BiGlobeAlt/></span> Yaponiya</h6>
                                            <h6><span><BiGlobeAlt/></span> Dubai</h6>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="3">
                                    <Row>
                                        <Col sm="12">
                                            <h3>Sohalar</h3>
                                            <h6><span><BsCheckAll/></span> Lorem</h6>

                                            <h6><span><BsCheckAll/></span> Lorem</h6>


                                            <h3>Talabalar</h3>
                                            <h6>Lorem ipsum </h6>
                                            <h3>Grand beruvchi davlatlar</h3>
                                            <h6><span><BiGlobeAlt/></span> Rassiya</h6>
                                            <h6><span><BiGlobeAlt/></span> Amerika</h6>
                                            <h6><span><BiGlobeAlt/></span> Yaponiya</h6>
                                            <h6><span><BiGlobeAlt/></span> Dubai</h6>
                                        </Col>
                                    </Row>
                                </TabPane>
                            </TabContent>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};


export default ProgramsPages;