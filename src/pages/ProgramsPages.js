import React, {useState} from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Card} from 'reactstrap';
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
                                        <div className="box">Bakalavr</div>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={{active: activeTab === '2'}}
                                        onClick={() => {
                                            toggle('2');
                                        }}
                                    >

                                        <div className="box">Magistratura</div>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={{active: activeTab === '3'}}
                                        onClick={() => {
                                            toggle('3');
                                        }}
                                    >
                                        <div className="box">PhD</div>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={activeTab}>
                                <TabPane tabId="1">
                                    <Row>

                                        <Col sm="12" className="d-flex">
                                            <Row className="my-5">

                                                <Col sm="12" md="6" lg="4">
                                                    <Card className="bg-transparent border-0">
                                                        <h3>Sohalar</h3>
                                                        <h6> Lorem</h6>
                                                        <h6> Lorem</h6>
                                                        <h6> Lorem</h6>
                                                        <h6> Lorem</h6>
                                                        <h6> Lorem</h6>
                                                    </Card>
                                                </Col>


                                                <Col sm="12" md="6" lg="4">
                                                    <Card className="bg-transparent border-0">
                                                        <h3>Talablar</h3>
                                                        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at
                                                            autem blanditiis commodi, cupiditate dolorem doloribus enim error
                                                            eveniet expedita facilis ipsa iusto laudantium natus nobis odio optio
                                                            quos veniam!</h6>
                                                    </Card>
                                                </Col>
                                                <Col sm="12" md="6" lg="4">
                                                    <Card className="bg-transparent border-0">
                                                        <h3>Grand beruvchi davlatlar</h3>
                                                        <h6> Rassiya</h6>
                                                        <h6> Amerika</h6>
                                                        <h6> Yaponiya</h6>
                                                        <h6> Dubai</h6>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="2">
                                    <Row>

                                        <Col sm="12" className="d-flex">
                                            <Row className="my-5">

                                                <Col sm="12" md="6" lg="4" >
                                                    <Card className="bg-transparent border-0">
                                                        <h3>Sohalar</h3>
                                                        <h6> Lorem</h6>
                                                        <h6> Lorem</h6>
                                                        <h6> Lorem</h6>
                                                        <h6> Lorem</h6>
                                                        <h6> Lorem</h6>
                                                    </Card>
                                                </Col>


                                                <Col sm="12" md="6" lg="4">
                                                    <Card className="bg-transparent border-0">
                                                        <h3>Talablar</h3>
                                                        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at
                                                            autem blanditiis commodi, cupiditate dolorem doloribus enim error
                                                            eveniet expedita facilis ipsa iusto laudantium natus nobis odio optio
                                                            quos veniam!</h6>
                                                    </Card>
                                                </Col>
                                                <Col sm="12" md="6" lg="4">
                                                    <Card className="bg-transparent border-0">
                                                        <h3>Grand beruvchi davlatlar</h3>
                                                        <h6> Rassiya</h6>
                                                        <h6> Amerika</h6>
                                                        <h6> Yaponiya</h6>
                                                        <h6> Dubai</h6>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="3">
                                    <Row>

                                        <Col sm="12" className="d-flex">
                                            <Row className="my-5">

                                                <Col sm="12" md="6" lg="4" >
                                                    <Card className="bg-transparent border-0">
                                                        <h3>Sohalar</h3>
                                                        <h6> Lorem</h6>
                                                        <h6> Lorem</h6>
                                                        <h6> Lorem</h6>
                                                        <h6> Lorem</h6>
                                                    </Card>
                                                </Col>


                                                <Col sm="12" md="6" lg="4">
                                                    <Card className="bg-transparent border-0">
                                                        <h3>Talablar</h3>
                                                        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at
                                                            autem blanditiis comm dolorem doloribus enim error
                                                            e facilis ipsa iusto laudantium natus nobis odio optio
                                                            quos veniam!</h6>
                                                    </Card>
                                                </Col>
                                                <Col sm="12" md="6" lg="4">
                                                    <Card className="bg-transparent border-0">
                                                        <h3>Grand beruvchi davlatlar</h3>
                                                        <h6> Rassiya</h6>
                                                        <h6> Amerika</h6>
                                                        <h6> Yaponiya</h6>
                                                        <h6> Dubai</h6>
                                                    </Card>
                                                </Col>
                                            </Row>
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